document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('a[href^="#"]');
    const header = document.querySelector('nav');
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    const startDark = storedTheme ? storedTheme === 'dark' : prefersDark;

    function applyTheme(isDark) {
        document.body.classList.toggle('theme-dark', isDark);
        const icon = themeToggle ? themeToggle.querySelector('i') : null;
        if (icon) {
            icon.classList.toggle('ri-moon-line', !isDark);
            icon.classList.toggle('ri-sun-line', isDark);
        }
        if (themeToggleMobile) {
            themeToggleMobile.textContent = isDark ? 'Use Light Theme' : 'Use Dark Theme';
        }
    }

    applyTheme(startDark);

    // Brittany Chiang-style cursor spotlight (respects reduced motion).
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduceMotion) {
        let rafPending = false;
        let lastX = window.innerWidth * 0.5;
        let lastY = window.innerHeight * 0.3;

        const paint = () => {
            rafPending = false;
            document.documentElement.style.setProperty('--spotlight-x', `${Math.round(lastX)}px`);
            document.documentElement.style.setProperty('--spotlight-y', `${Math.round(lastY)}px`);
        };

        // Initial position so the gradient doesn't "pop" on first move.
        paint();

        window.addEventListener('pointermove', (e) => {
            lastX = e.clientX;
            lastY = e.clientY;
            if (!rafPending) {
                rafPending = true;
                requestAnimationFrame(paint);
            }
        }, { passive: true });
    }

    function toggleTheme() {
        const isDark = !document.body.classList.contains('theme-dark');
        applyTheme(isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    if (themeToggleMobile) {
        themeToggleMobile.addEventListener('click', toggleTheme);
    }

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                if (mobileMenu) mobileMenu.classList.add('hidden');
            }
        });
    });

    window.scrollToSection = function(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    // Add a slight stagger so reveal animations feel intentional.
    document.querySelectorAll('.animate-on-scroll').forEach((el, index) => {
        el.style.transitionDelay = `${Math.min(index * 0.06, 0.42)}s`;
    });

    document.querySelectorAll('img').forEach((img, index) => {
        if (index > 0 && !img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
    });

    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            filterBtns.forEach(function(b) {
                b.classList.remove('active', 'bg-primary', 'text-white');
                b.classList.add('text-gray-600');
            });

            this.classList.add('active', 'bg-primary', 'text-white');
            this.classList.remove('text-gray-600');

            projectCards.forEach(function(card) {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    projectCards.forEach(function(card) {
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const project = card.dataset.project;
                if (project) {
                    openModal(project);
                }
            }
        });
    });

    if (filterBtns.length > 0) {
        filterBtns[0].classList.add('bg-primary', 'text-white');
    }

    const projectData = {
         project1: {
             title: 'Mapping of Cane Fields for Kabras Sugar West Kenya',
             image: 'assets/Kabras_sugar.jpg',
             content: `                
                 <h4 class="text-lg font-bold mb-3">Problem</h4>
                 <p class="text-gray-700 mb-6">Kabras Sugar faced challenges in maintaining an up-to-date agricultural database. Outdated and incomplete cane field records made it difficult to track farmer details, estimate sugarcane supply, and plan resource allocation. This lack of accurate geospatial information posed risks to both operational efficiency and long-term sustainability.</p>
                 
                 <h4 class="text-lg font-bold mb-3">Solution</h4>
                 <p class="text-gray-700 mb-4">I led a team of 70 mappers in a large-scale field data collection and analysis exercise across West Kenya. Using GPS-enabled smartphones, we gathered high-precision data on cane field boundaries and farmer profiles. The workflow included:</p>
                 <ul class="list-disc list-outside text-gray-700 mb-6 space-y-1 pl-5">
                     <li>Designing a structured data collection process for field teams with proper documentation and metadata standards.</li>
                     <li>Training and supervising mappers to ensure accuracy and consistency, implementing QC checks for data quality.</li>
                     <li>Performing real-time spatial analysis and database updates in PostGIS to keep the agricultural system current.</li>
                     <li>Developing GIS datasets and a spatial web map for easy visualization and access by management.</li>
                     <li>Creating automated Python scripts for data cleaning, validation, and detecting overlaps/gaps in field boundaries.</li>
                 </ul>
 
                 <h4 class="text-lg font-bold mb-3">Impact</h4>
                 <p class="text-gray-700 mb-4">The updated agricultural database became a critical decision-support tool for Kabras Sugar.</p>
                  <ul class="list-disc list-outside text-gray-700 mb-6 space-y-1 pl-5">
                     <li>Enabled precise estimation of cane supply from farmers through spatial queries and analysis.</li>
                     <li>Supported infrastructure development with accurate spatial insights and KPI tracking (coverage, QC status).</li>
                     <li>Minimized potential disruptions to ecosystems by identifying high-risk areas through spatial modeling.</li>
                     <li>Strengthened farmer engagement through reliable records and improved data transparency.</li>
                     <li>Enhanced overall sustainability and efficiency in sugar production operations through automated reporting.</li>
                 </ul>
 
                 <h4 class="text-lg font-bold mb-3">Skills Shown</h4>
                 <p class="text-gray-700 mb-6">Spatial Data Management | GIS Analysis & Reporting | Automation & Scripting | Database Integration | Quality Control | Team Leadership</p>
 
                 <h4 class="text-lg font-bold mb-3">Technologies Used</h4>
                 <div class="flex flex-wrap gap-2 mb-6">
                     <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">GPS Smartphones</span>
                     <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">PostGIS/PostgreSQL</span>
                     <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">QGIS</span>
                     <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Python (Automation)</span>
                     <span class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Spatial Web Map</span>
                 </div>
             `,
         },
         project2: {
             title: 'Kenyan Standard Gauge Railway (SGR) Construction',
             image: 'assets/KRC.jpg',
             content: `
                 <h4 class="text-lg font-bold mb-3">Problem</h4>
                 <p class="text-gray-700 mb-6">The construction of the Kenyan Standard Gauge Railway (SGR), one of the country’s largest infrastructure projects, required accurate and reliable geospatial datasets. Planners and engineers needed detailed information about the corridor terrain, road networks, and ecosystems to minimize environmental impact and ensure sustainable development. Without a robust GIS framework, decision-making on alignment, construction, and mitigation strategies would have been inefficient and prone to risks.</p>
 
                 <h4 class="text-lg font-bold mb-3">Solution</h4>
                 <p class="text-gray-700 mb-4">I contributed to the creation of the fundamental GIS datasets that guided the SGR construction. My work included:</p>
                 <ul class="list-disc list-outside text-gray-700 mb-6 space-y-1 pl-5">
                     <li>Mapping all features along the railway corridor, including physical infrastructure, settlements, and natural features with proper documentation and metadata.</li>
                     <li>Developing detailed terrain models to support engineering design and construction planning, implementing QC checks for data accuracy.</li>
                     <li>Conducting ecosystem mapping to identify sensitive areas at risk from the railway path, creating spatial analysis reports.</li>
                     <li>Compiling and organizing spatial data in ArcGIS and PostGIS, ensuring accuracy, accessibility, and usability for engineers and policymakers.</li>
                     <li>Creating automated scripts for data validation and detecting overlaps/gaps in the dataset.</li>
                 </ul>
 
                 <h4 class="text-lg font-bold mb-3">Impact</h4>
                 <p class="text-gray-700 mb-4">The GIS datasets I developed played a crucial role in the success of the project:</p>
                 <ul class="list-disc list-outside text-gray-700 mb-6 space-y-1 pl-5">
                     <li>Provided engineers with precise spatial insights for route alignment and construction planning through spatial queries.</li>
                     <li>Helped minimize potential disruptions to ecosystems by identifying key environmental areas through spatial modeling.</li>
                     <li>Supported informed decision-making, improving project efficiency, safety, and sustainability through KPI tracking and reporting.</li>
                     <li>Contributed to one of Kenya’s most important transport infrastructure projects, enhancing connectivity and economic growth.</li>
                     <li>Established a foundation for long-term spatial data management and maintenance of the railway corridor.</li>
                 </ul>
 
                 <h4 class="text-lg font-bold mb-3">Skills Shown</h4>
                 <p class="text-gray-700 mb-6">Spatial Data Management | Terrain Modeling | Ecosystem Mapping | Database Integration | Automation & Scripting | Quality Control | ArcGIS | AutoCAD</p>
 
                 <h4 class="text-lg font-bold mb-3">Technologies Used</h4>
                 <div class="flex flex-wrap gap-2 mb-6">
                     <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">GIS Datasets</span>
                     <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Terrain Models</span>
                     <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Ecosystem Mapping</span>
                     <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">ArcGIS</span>
                     <span class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">AutoCAD</span>
                     <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">PostGIS/PostgreSQL</span>
                     <span class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Python (Automation)</span>
                 </div>
             `,
         },
         project3: {
             title: 'Entebbe International Airport GIS Database Update',
             image: 'assets/Entebbe-International-Airport.jpg',
             content: `
                 <h4 class="text-lg font-bold mb-3">Problem</h4>
                 <p class="text-gray-700 mb-6">Uganda’s Entebbe International Airport required an updated and comprehensive GIS database to support operational efficiency, safety, and future expansion planning. The existing datasets were outdated, lacking detail in infrastructure representation and aeronautical mapping. Without precise and accurate geospatial data, critical airport management functions — such as navigation, expansion, and safety compliance — were at risk.</p>
 
                 <h4 class="text-lg font-bold mb-3">Solution</h4>
                 <p class="text-gray-700 mb-4">I was responsible for a full-scale update of the airport’s GIS database, ensuring precision and completeness. My contributions included:</p>
                 <ul class="list-disc list-outside text-gray-700 mb-6 space-y-1 pl-5">
                     <li>Field data collection and spatial data compilation for infrastructure mapping with proper documentation and metadata standards.</li>
                     <li>3D mapping to capture highly accurate and precise representations of airport features, implementing QC checks for data accuracy.</li>
                     <li>Use of ArcGIS, AutoCAD, and PostGIS for spatial database development and integration, ensuring data integrity.</li>
                     <li>Creation of aerodrome charts (airport charts) using field and mapped data, fully aligned with international aviation standards.</li>
                     <li>Delivering a comprehensive digital twin of the airport’s infrastructure for spatial analysis and modeling.</li>
                     <li>Creating automated scripts for data validation and detecting overlaps/gaps in the dataset.</li>
                 </ul>
 
                 <h4 class="text-lg font-bold mb-3">Impact</h4>
                 <p class="text-gray-700 mb-4">The updated GIS database became a critical tool for Entebbe International Airport:</p>
                 <ul class="list-disc list-outside text-gray-700 mb-6 space-y-1 pl-5">
                     <li>Enhanced operational efficiency and safety through accurate spatial data and KPI tracking.</li>
                     <li>Provided a reliable foundation for future expansion planning through spatial analysis and reporting.</li>
                     <li>Supported aviation charting and navigation requirements, improving compliance with industry standards through quality assurance.</li>
                     <li>Strengthened decision-making for airport authorities by offering a holistic digital twin of the airport environment for geospatial analysis.</li>
                     <li>Established a centralized spatial data management system for ongoing maintenance and updates.</li>
                 </ul>
 
                 <h4 class="text-lg font-bold mb-3">Skills Shown</h4>
                 <p class="text-gray-700 mb-6">Spatial Data Management | GIS Analysis & Reporting | Automation & Scripting | Database Integration | Quality Control | ArcGIS | AutoCAD | PostGIS</p>
 
                 <h4 class="text-lg font-bold mb-3">Technologies Used</h4>
                 <div class="flex flex-wrap gap-2 mb-6">
                     <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">ArcGIS</span>
                     <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">AutoCAD</span>
                     <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">3D Mapping</span>
                     <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Aerodrome Charts</span>
                     <span class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">PostGIS/PostgreSQL</span>
                     <span class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Python (Automation)</span>
                 </div>
             `,
         },
         project4: {
             title: 'Web-based GIS Application for Environmental Data Analysis and Visualization',
             image: 'assets/mapping.jpg',
             content: `
                 <h4 class="text-lg font-bold mb-3">Description</h4>
                 <p class="text-gray-700 mb-6">Concept showcase of my ability to design and develop interactive web-based GIS applications that integrate spatial databases with advanced analysis tools. Such systems are essential for environmental monitoring, conservation planning, and resource management.</p>
                 
                 <h4 class="text-lg font-bold mb-3">Skills Shown</h4>
                 <ul class="list-disc list-outside text-gray-700 mb-6 space-y-1 pl-5">
                     <li><strong>Leaflet</strong> – Build interactive map interfaces for spatial data visualization</li>
                     <li><strong>PostGIS</strong> – Manage and analyze geospatial data with advanced spatial queries and spatial data management</li>
                     <li><strong>Python</strong> – Automate backend workflows, data integration, spatial analysis processes, and QC checks.</li>
                     <li><strong>GeoServer</strong> – Publish maps and services for geospatial publishing and deployment</li>
                 </ul>
 
                 <h4 class="text-lg font-bold mb-3">What I Can Deliver</h4>
                 <ul class="list-disc list-outside text-gray-700 mb-6 space-y-1 pl-5">
                     <li>Interactive web mapping tools for visualizing environmental indicators with real-time data integration</li>
                     <li>Real-time querying and spatial analysis of large datasets with automated reporting</li>
                     <li>Custom workflows to support researchers and policymakers in data-driven decision-making with dashboard integration</li>
                     <li>Geospatial publishing and deployment via GeoServer and cloud hosting</li>
                 </ul>
 
                 <h4 class="text-lg font-bold mb-3">Technologies I Work With</h4>
                 <div class="flex flex-wrap gap-2 mb-6">
                     <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Leaflet</span>
                     <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">PostGIS/PostgreSQL</span>
                     <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Python (Automation, QC)</span>
                     <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">GeoServer</span>
                     <span class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Cloud Hosting (AWS/Azure)</span>
                 </div>
             `,
         },
         project5: {
             title: 'Website Design & Development',
             image: 'assets/Webdev.jpeg',
             content: `
                 <h4 class="text-lg font-bold mb-3">Description</h4>
                 <p class="text-gray-700 mb-6">Design and develop responsive, modern websites tailored to different industries, ensuring functionality, aesthetics, and seamless user experience. Specialized in creating web interfaces for geospatial applications and dashboards.</p>
                 
                 <h4 class="text-lg font-bold mb-3">Industries Served</h4>
                 <ul class="list-disc list-outside text-gray-700 mb-6 space-y-1 pl-5">
                     <li>Small Businesses & Startups</li>
                     <li>Real Estate</li>
                     <li>NGOs, Churches & Charities</li>
                     <li>Health Care & Hospitality</li>
                     <li>Geospatial & Environmental Organizations</li>
                 </ul>
 
                 <h4 class="text-lg font-bold mb-3">What I Can Deliver</h4>
                 <ul class="list-disc list-outside text-gray-700 mb-6 space-y-1 pl-5">
                     <li>User-friendly, professional websites that reflect brand identity</li>
                     <li>Mobile-first, responsive designs for optimal accessibility</li>
                     <li>Interactive layouts that improve customer engagement</li>
                     <li>Web interfaces for geospatial applications, dashboards, and mapping tools</li>
                 </ul>
 
                 <h4 class="text-lg font-bold mb-3">Skills Shown</h4>
                 <div class="flex flex-wrap gap-2 mb-6">
                     <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Frontend Development</span>
                     <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Responsive UI/UX</span>
                     <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">HTML</span>
                     <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">CSS</span>
                     <span class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                     <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Web GIS Interfaces</span>
                 </div>
             `,
         },
         project6: {
             title: 'Mapping Analytics Dashboard',
             image: 'assets/Dashboard.png',
             content: `
                 <h4 class="text-lg font-bold mb-3">Description</h4>
                 <p class="text-gray-700 mb-6">Concept showcase of a live monitoring and analytics dashboard for field mapping projects. Combines geospatial and tabular data into actionable insights for project teams.</p>
                 
                 <h4 class="text-lg font-bold mb-3">Skills Shown</h4>
                 <ul class="list-disc list-outside text-gray-700 mb-6 space-y-1 pl-5">
                     <li><strong>Excel</strong> – Quick prototyping and interactive pivot dashboards</li>
                     <li><strong>Power BI</strong> – Advanced visualizations, drill-down analysis, and real-time reporting with KPI tracking</li>
                     <li><strong>Python (Streamlit, Dash Plotly)</strong> – Custom interactive dashboards with geospatial integration, automation, and QC checks</li>
                     <li><strong>PostGIS</strong> – Spatial data management and querying for dashboard data sources</li>
                 </ul>
 
                 <h4 class="text-lg font-bold mb-3">What I Can Deliver</h4>
                 <ul class="list-disc list-outside text-gray-700 mb-6 space-y-1 pl-5">
                     <li>Real-time dashboards to track project progress with KPIs (coverage, QC status, completion rates)</li>
                     <li>Field activity monitoring for project managers with automated reporting</li>
                     <li>Optimized resource allocation through data-driven insights and spatial analysis</li>
                     <li>Geospatial publishing of dashboard data via GeoServer and web mapping services</li>
                 </ul>
 
                 <h4 class="text-lg font-bold mb-3">Technologies I Work With</h4>
                 <div class="flex flex-wrap gap-2 mb-6">
                     <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Excel</span>
                     <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Power BI</span>
                     <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Python (Streamlit, Dash Plotly, Automation)</span>
                     <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">PostGIS/PostgreSQL</span>
                     <span class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">GeoServer</span>
                     <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Cloud Hosting (AWS/Azure)</span>
                 </div>
             `,
         },
         project7: {
             title: 'Environmental Monitoring & Conservation GIS',
             image: 'assets/EnvironmentalSuite.png',
             content: `
                 <h4 class="text-lg font-bold mb-3">Description</h4>
                 <p class="text-gray-700 mb-6">With a strong Geography and Environmental Studies background, I have managed GIS projects focused on environmental monitoring, biodiversity conservation, and sustainable resource management. These projects required the integration of remote sensing, spatial modeling, and environmental data analysis with proper documentation and metadata standards.</p>
                 
                 <h4 class="text-lg font-bold mb-3">Skills Shown</h4>
                 <ul class="list-disc list-outside text-gray-700 mb-6 space-y-1 pl-5">
                     <li>Remote Sensing for environmental data extraction with QC checks for data quality</li>
                     <li>Environmental Analysis for conservation planning with spatial analysis and reporting</li>
                     <li>Spatial Data Modelling to assess resource distribution and change over time with automated workflows</li>
                     <li>Spatial Data Management for maintaining environmental datasets in PostGIS</li>
                     <li>Automation & Scripting for data processing and change detection</li>
                 </ul>
 
                 <h4 class="text-lg font-bold mb-3">What I Delivered</h4>
                  <ul class="list-disc list-outside text-gray-700 mb-6 space-y-1 pl-5">
                     <li>Valuable datasets and insights that supported environmental agencies in biodiversity monitoring and conservation planning with proper metadata</li>
                     <li>Analytical outputs used for sustainable resource management and decision-making with KPI tracking</li>
                     <li>Geospatial publishing of environmental data via GeoServer and web mapping services</li>
                     <li>Automated QC checks for detecting overlaps/gaps in environmental datasets</li>
                 </ul>
 
                 <h4 class="text-lg font-bold mb-3">Technologies Used</h4>
                 <div class="flex flex-wrap gap-2 mb-6">
                     <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Remote Sensing</span>
                     <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Environmental Analysis</span>
                     <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Spatial Data Modelling</span>
                     <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">PostGIS/PostgreSQL</span>
                     <span class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Python (Automation, QC)</span>
                     <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">GeoServer</span>
                     <span class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Cloud Hosting (AWS/Azure)</span>
                 </div>
             `,
         },
         project8: {
             title: 'Juba City Mapping: Land Information Management System (LIMS)',
             image: 'assets/QGIS.png',
             content: `
                 <h4 class="text-lg font-bold mb-3">Problem</h4>
                 <p class="text-gray-700 mb-6">Juba, South Sudan, faced challenges with fragmented land records, poor data accessibility, and frequent land disputes. Without a centralized and reliable system, land management processes were inefficient, leading to administrative bottlenecks and conflicts over ownership and boundaries.</p>
 
                 <h4 class="text-lg font-bold mb-3">Solution</h4>
                 <p class="text-gray-700 mb-4">I led the development of a Land Information Management System (LIMS) to streamline land record management and improve transparency. My contributions included:</p>
                 <ul class="list-disc list-outside text-gray-700 mb-6 space-y-1 pl-5">
                     <li>Supervising the mapping of Juba City using orthorectified imagery with proper documentation and metadata standards.</li>
                     <li>Using QGIS for data integration, mapping workflows, and spatial data management.</li>
                     <li>Managing spatial data stored in a Postgres/PostGIS database, implementing spatial queries for data updates and maintenance.</li>
                     <li>Designing and developing a real-time dashboard for monitoring, managing, and analyzing mapped data with KPI tracking (coverage, QC status).</li>
                     <li>Ensuring data accuracy and consistency through team supervision, quality control, and automated QC checks for overlaps/gaps.</li>
                     <li>Creating automated Python scripts for data cleaning, validation, and detecting overlaps/gaps in land parcels.</li>
                     <li>Publishing maps and services via GeoServer for geospatial publishing and deployment.</li>
                 </ul>
 
                 <h4 class="text-lg font-bold mb-3">Impact</h4>
                 <ul class="list-disc list-outside text-gray-700 mb-6 space-y-1 pl-5">
                     <li>Created a centralized digital system for managing land records with proper spatial data management.</li>
                     <li>Improved data transparency and accessibility, reducing the likelihood of disputes through web mapping services.</li>
                     <li>Supported policymakers and administrators in making data-driven decisions for urban planning and land allocation through spatial analysis and reporting.</li>
                     <li>Provided a foundation for long-term sustainable land management in Juba with automated workflows.</li>
                     <li>Established a geospatial publishing system via GeoServer for map services and cloud hosting.</li>
                 </ul>
 
                 <h4 class="text-lg font-bold mb-3">Skills Shown</h4>
                 <p class="text-gray-700 mb-6">Spatial Data Management | GIS Analysis & Reporting | Automation & Scripting | Database Integration | Quality Control | Geospatial Publishing & Deployment | QGIS | PostGIS | GeoServer</p>
 
                 <h4 class="text-lg font-bold mb-3">Technologies Used</h4>
                 <div class="flex flex-wrap gap-2 mb-6">
                     <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">QGIS</span>
                     <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">PostgreSQL/PostGIS</span>
                     <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">GIS Mapping</span>
                     <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Real-time Dashboard</span>
                     <span class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Python (Automation, QC)</span>
                     <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">GeoServer</span>
                     <span class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Cloud Hosting (AWS/Azure)</span>
                 </div>
             `,
         },
         project9: {
             title: 'West Kenya Sugarcane Management & NDVI Analysis',
             image: 'assets/NDVI1.png',
             content: `
                 <h4 class="text-lg font-bold mb-3">Problem</h4>
                 <p class="text-gray-700 mb-6">Kabras Sugar in West Kenya needed a reliable way to monitor over 100,000 plus sugarcane fields. Traditional field surveys were time-consuming, costly, and often lacked precision. Without continuous monitoring, it was difficult to assess crop health, irrigation needs, and yield forecasts, leading to inefficiencies in farm management and resource use.</p>
 
                 <h4 class="text-lg font-bold mb-3">Solution</h4>
                 <p class="text-gray-700 mb-4">Working with a development team, I contributed to the creation of an NDVI-based crop management system using Google Earth Engine (GEE) and remote sensing technologies. My role focused on:</p>
                 <ul class="list-disc list-outside text-gray-700 mb-6 space-y-1 pl-5">
                     <li>NDVI analysis for detecting sugarcane presence, growth development, and overall crop health with QC checks for data accuracy.</li>
                     <li>Remote sensing workflows to process and analyze satellite imagery efficiently, implementing automated data validation.</li>
                     <li>Designing monitoring tools for crop health and irrigation optimization with spatial analysis and reporting.</li>
                     <li>Integrating outputs into a decision-support platform for farmers and agricultural managers with database integration.</li>
                     <li>Creating automated Python scripts for data cleaning, validation, and detecting overlaps/gaps in field boundaries.</li>
                     <li>Publishing NDVI maps and services via GeoServer for geospatial publishing and deployment.</li>
                 </ul>
 
                 <h4 class="text-lg font-bold mb-3">Impact</h4>
                 <p class="text-gray-700 mb-4">The system transformed sugarcane monitoring in West Kenya by:</p>
                 <ul class="list-disc list-outside text-gray-700 mb-6 space-y-1 pl-5">
                     <li>Enabling farmers to track crop health in near real-time with KPI tracking (coverage, QC status).</li>
                     <li>Helping optimize irrigation, fertilizer use, and pest control through spatial analysis and automated reporting.</li>
                     <li>Improving yield forecasting and resource allocation through geospatial analysis and modeling.</li>
                     <li>Supporting food security and agricultural sustainability in the region with dashboard integration.</li>
                     <li>Establishing a foundation for long-term spatial data management and maintenance of agricultural datasets.</li>
                 </ul>
 
                 <h4 class="text-lg font-bold mb-3">Skills Shown</h4>
                 <p class="text-gray-700 mb-6">Spatial Data Management | GIS Analysis & Reporting | Automation & Scripting | Database Integration | Quality Control | Geospatial Publishing & Deployment | NDVI Analysis | Remote Sensing | Google Earth Engine</p>
 
                 <h4 class="text-lg font-bold mb-3">Technologies Used</h4>
                 <div class="flex flex-wrap gap-2 mb-6">
                     <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Google Earth Engine</span>
                     <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Remote Sensing</span>
                     <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">NDVI Analysis</span>
                     <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Crop Monitoring Tools</span>
                     <span class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Python (Automation, QC)</span>
                     <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">PostGIS/PostgreSQL</span>
                     <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">GeoServer</span>
                     <span class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Cloud Hosting (AWS/Azure)</span>
                 </div>
             `,
         },
    };

    function openModal(project) {
        const modal = document.getElementById('project-modal');
        const title = document.getElementById('modal-title');
        const content = document.getElementById('modal-content');
        const image = document.getElementById('modal-image');

        if (modal && title && content && image && projectData[project]) {
            title.innerHTML = projectData[project].title;
            content.innerHTML = projectData[project].content;
            image.src = projectData[project].image;
            modal.classList.remove('hidden');
        }
    }

    function closeModal() {
        const modal = document.getElementById('project-modal');
        if (modal) {
            modal.classList.add('hidden');
        }
    }

    const modal = document.getElementById('project-modal');
    const closeBtn = document.getElementById('modal-close');
    const projectsGrid = document.getElementById('projects-grid');

    if (projectsGrid) {
        projectsGrid.addEventListener('click', (e) => {
            const card = e.target.closest('.project-card');
            if (card) {
                const project = card.dataset.project;
                if (project) {
                    openModal(project);
                }
            }
        });
    }

    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });

    const observerOptions = {
        threshold: 0.1,
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .timeline-item, .skill-item').forEach(el => {
        observer.observe(el);
    });
    
    const copyrightYear = document.getElementById('copyright-year');
    if (copyrightYear) {
        copyrightYear.textContent = new Date().getFullYear();
    }

    window.addEventListener('scroll', function() {
        if (header) {
            if (window.scrollY > 10) { // Apply effect sooner
                header.classList.add('bg-white/90', 'dark:bg-gray-800/80', 'backdrop-blur-lg');
            } else {
                header.classList.remove('bg-white/90', 'dark:bg-gray-800/80', 'backdrop-blur-lg');
            }
        }
    });

    const sectionIds = ['home', 'about', 'projects', 'soft-skills', 'experience', 'contact'];
    const sections = sectionIds
        .map(id => document.getElementById(id))
        .filter(Boolean);
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const activeId = entry.target.id;
            document.querySelectorAll('.nav-link').forEach((link) => {
                const href = link.getAttribute('href');
                link.classList.toggle('is-current', href === `#${activeId}`);
            });
        });
    }, { threshold: 0.35, rootMargin: '-20% 0px -55% 0px' });

    sections.forEach((section) => sectionObserver.observe(section));

    // Contact form submission logic
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const nameInput = document.getElementById('form-name');
            const emailInput = document.getElementById('form-email');
            const subjectInput = document.getElementById('form-subject');
            const messageInput = document.getElementById('form-message');

            if (!nameInput.value.trim() || !emailInput.value.trim() || !subjectInput.value.trim() || !messageInput.value.trim()) {
                alert('Please fill out all fields before sending.');
                return;
            }

            const phoneNumber = '254729482189';
            const whatsappMessage = `Hello Benard, I'm contacting you from your portfolio.

*Name:* ${nameInput.value.trim()}
*Email:* ${emailInput.value.trim()}
*Subject:* ${subjectInput.value.trim()}

*Message:*
${messageInput.value.trim()}`;

            const encodedMessage = encodeURIComponent(whatsappMessage);
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

            window.open(whatsappUrl, '_blank');

            // Give the browser a moment to open the new tab before resetting
            setTimeout(() => {
                contactForm.reset();
                alert('Your message is ready to be sent in WhatsApp!');
            }, 500);
        });
    }
});
