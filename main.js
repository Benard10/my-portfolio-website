document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('a[href^="#"]');
    const header = document.querySelector('nav');

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
                    <li>Designing a structured data collection process for field teams.</li>
                    <li>Training and supervising mappers to ensure accuracy and consistency.</li>
                    <li>Performing real-time spatial analysis and database updates to keep the agricultural system current.</li>
                    <li>Developing GIS datasets and a spatial web map for easy visualization and access by management.</li>
                </ul>

                <h4 class="text-lg font-bold mb-3">Impact</h4>
                <p class="text-gray-700 mb-4">The updated agricultural database became a critical decision-support tool for Kabras Sugar.</p>
                 <ul class="list-disc list-outside text-gray-700 mb-6 space-y-1 pl-5">
                    <li>Enabled precise estimation of cane supply from farmers.</li>
                    <li>Supported infrastructure development with accurate spatial insights.</li>
                    <li>Minimized potential disruptions to ecosystems by identifying high-risk areas.</li>
                    <li>Strengthened farmer engagement through reliable records.</li>
                    <li>Enhanced overall sustainability and efficiency in sugar production operations.</li>
                </ul>

                <h4 class="text-lg font-bold mb-3">Skills Shown</h4>
                <p class="text-gray-700 mb-6">Spatial Analysis | GIS Data Collection | Real-time Data Management | Team Leadership | Database Updating</p>

                <h4 class="text-lg font-bold mb-3">Technologies Used</h4>
                <div class="flex flex-wrap gap-2 mb-6">
                    <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">GPS Smartphones</span>
                    <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Geospatial Data Analysis</span>
                    <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Agricultural Database</span>
                    <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Spatial Web Map</span>
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
                    <li>Mapping all features along the railway corridor, including physical infrastructure, settlements, and natural features.</li>
                    <li>Developing detailed terrain models to support engineering design and construction planning.</li>
                    <li>Conducting ecosystem mapping to identify sensitive areas at risk from the railway path.</li>
                    <li>Compiling and organizing spatial data in ArcGIS, ensuring accuracy, accessibility, and usability for engineers and policymakers.</li>
                </ul>

                <h4 class="text-lg font-bold mb-3">Impact</h4>
                <p class="text-gray-700 mb-4">The GIS datasets I developed played a crucial role in the success of the project:</p>
                <ul class="list-disc list-outside text-gray-700 mb-6 space-y-1 pl-5">
                    <li>Provided engineers with precise spatial insights for route alignment and construction planning.</li>
                    <li>Helped minimize potential disruptions to ecosystems by identifying key environmental areas.</li>
                    <li>Supported informed decision-making, improving project efficiency, safety, and sustainability.</li>
                    <li>Contributed to one of Kenya’s most important transport infrastructure projects, enhancing connectivity and economic growth.</li>
                </ul>

                <h4 class="text-lg font-bold mb-3">Skills Shown</h4>
                <p class="text-gray-700 mb-6">Terrain Modeling | Road Network Analysis | Ecosystem Mapping | Data Compilation | ArcGIS | AutoCAD</p>

                <h4 class="text-lg font-bold mb-3">Technologies Used</h4>
                <div class="flex flex-wrap gap-2 mb-6">
                    <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">GIS Datasets</span>
                    <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Terrain Models</span>
                    <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Ecosystem Mapping</span>
                    <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">ArcGIS</span>
                    <span class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">AutoCAD</span>
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
                    <li>Field data collection and spatial data compilation for infrastructure mapping.</li>
                    <li>3D mapping to capture highly accurate and precise representations of airport features.</li>
                    <li>Use of ArcGIS and AutoCAD for spatial database development and integration.</li>
                    <li>Creation of aerodrome charts (airport charts) using field and mapped data, fully aligned with international aviation standards.</li>
                    <li>Delivering a comprehensive digital twin of the airport’s infrastructure.</li>
                </ul>

                <h4 class="text-lg font-bold mb-3">Impact</h4>
                <p class="text-gray-700 mb-4">The updated GIS database became a critical tool for Entebbe International Airport:</p>
                <ul class="list-disc list-outside text-gray-700 mb-6 space-y-1 pl-5">
                    <li>Enhanced operational efficiency and safety through accurate spatial data.</li>
                    <li>Provided a reliable foundation for future expansion planning.</li>
                    <li>Supported aviation charting and navigation requirements, improving compliance with industry standards.</li>
                    <li>Strengthened decision-making for airport authorities by offering a holistic digital twin of the airport environment.</li>
                </ul>

                <h4 class="text-lg font-bold mb-3">Skills Shown</h4>
                <p class="text-gray-700 mb-6">ArcGIS | AutoCAD | Spatial Data Compilation | 3D Mapping | Aeronautical Charting</p>

                <h4 class="text-lg font-bold mb-3">Technologies Used</h4>
                <div class="flex flex-wrap gap-2 mb-6">
                    <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">ArcGIS</span>
                    <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">AutoCAD</span>
                    <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">3D Mapping</span>
                    <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Aerodrome Charts</span>
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
                    <li><strong>PostGIS</strong> – Manage and analyze geospatial data with advanced spatial queries</li>
                    <li><strong>Python</strong> – Automate backend workflows, data integration, and spatial analysis processes.</li>
                </ul>

                <h4 class="text-lg font-bold mb-3">What I Can Deliver</h4>
                <ul class="list-disc list-outside text-gray-700 mb-6 space-y-1 pl-5">
                    <li>Interactive web mapping tools for visualizing environmental indicators</li>
                    <li>Real-time querying and spatial analysis of large datasets</li>
                    <li>Custom workflows to support researchers and policymakers in data-driven decision-making</li>
                </ul>

                <h4 class="text-lg font-bold mb-3">Technologies I Work With</h4>
                <div class="flex flex-wrap gap-2 mb-6">
                    <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Leaflet</span>
                    <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">PostGIS</span>
                    <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Python</span>
                </div>
            `,
        },
        project5: {
            title: 'Website Design & Development',
            image: 'assets/Webdev.jpeg',
            content: `
                <h4 class="text-lg font-bold mb-3">Description</h4>
                <p class="text-gray-700 mb-6">Design and develop responsive, modern websites tailored to different industries, ensuring functionality, aesthetics, and seamless user experience.</p>
                
                <h4 class="text-lg font-bold mb-3">Industries Served</h4>
                <ul class="list-disc list-outside text-gray-700 mb-6 space-y-1 pl-5">
                    <li>Small Businesses & Startups</li>
                    <li>Real Estate</li>
                    <li>NGOs, Churches & Charities</li>
                    <li>Health Care & Hospitality</li>
                </ul>

                <h4 class="text-lg font-bold mb-3">What I Can Deliver</h4>
                <ul class="list-disc list-outside text-gray-700 mb-6 space-y-1 pl-5">
                    <li>User-friendly, professional websites that reflect brand identity</li>
                    <li>Mobile-first, responsive designs for optimal accessibility</li>
                    <li>Interactive layouts that improve customer engagement</li>
                </ul>

                <h4 class="text-lg font-bold mb-3">Skills Shown</h4>
                <div class="flex flex-wrap gap-2 mb-6">
                    <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Frontend Development</span>
                    <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Responsive UI/UX</span>
                    <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">HTML</span>
                    <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">CSS</span>
                    <span class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
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
                    <li><strong>Power BI</strong> – Advanced visualizations, drill-down analysis, and real-time reporting</li>
                    <li><strong>Python (Streamlit, Dash Plotly)</strong> – Custom interactive dashboards with geospatial integration</li>
                </ul>

                <h4 class="text-lg font-bold mb-3">What I Can Deliver</h4>
                <ul class="list-disc list-outside text-gray-700 mb-6 space-y-1 pl-5">
                    <li>Real-time dashboards to track project progress</li>
                    <li>Field activity monitoring for project managers</li>
                    <li>Optimized resource allocation through data-driven insights</li>
                </ul>

                <h4 class="text-lg font-bold mb-3">Technologies I Work With</h4>
                <div class="flex flex-wrap gap-2 mb-6">
                    <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Excel</span>
                    <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Power BI</span>
                    <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Python (Streamlit, Dash Plotly)</span>
                </div>
            `,
        },
        project7: {
            title: 'Environmental Monitoring & Conservation GIS',
            image: 'assets/EnvironmentalSuite.png',
            content: `
                <h4 class="text-lg font-bold mb-3">Description</h4>
                <p class="text-gray-700 mb-6">With a strong Geography and Environmental Studies background, I have managed GIS projects focused on environmental monitoring, biodiversity conservation, and sustainable resource management. These projects required the integration of remote sensing, spatial modeling, and environmental data analysis.</p>
                
                <h4 class="text-lg font-bold mb-3">Skills Shown</h4>
                <ul class="list-disc list-outside text-gray-700 mb-6 space-y-1 pl-5">
                    <li>Remote Sensing for environmental data extraction</li>
                    <li>Environmental Analysis for conservation planning</li>
                    <li>Spatial Data Modelling to assess resource distribution and change over time</li>
                </ul>

                <h4 class="text-lg font-bold mb-3">What I Delivered</h4>
                 <ul class="list-disc list-outside text-gray-700 mb-6 space-y-1 pl-5">
                    <li>Valuable datasets and insights that supported environmental agencies in biodiversity monitoring and conservation planning</li>
                    <li>Analytical outputs used for sustainable resource management and decision-making</li>
                </ul>

                <h4 class="text-lg font-bold mb-3">Technologies Used</h4>
                <div class="flex flex-wrap gap-2 mb-6">
                    <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Remote Sensing</span>
                    <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Environmental Analysis</span>
                    <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Spatial Data Modelling</span>
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
                    <li>Supervising the mapping of Juba City using orthorectified imagery.</li>
                    <li>Using QGIS for data integration and mapping workflows.</li>
                    <li>Managing spatial data stored in a Postgres/PostGIS database.</li>
                    <li>Designing and developing a real-time dashboard for monitoring, managing, and analyzing mapped data.</li>
                    <li>Ensuring data accuracy and consistency through team supervision and quality control.</li>
                </ul>

                <h4 class="text-lg font-bold mb-3">Impact</h4>
                <ul class="list-disc list-outside text-gray-700 mb-6 space-y-1 pl-5">
                    <li>Created a centralized digital system for managing land records.</li>
                    <li>Improved data transparency and accessibility, reducing the likelihood of disputes.</li>
                    <li>Supported policymakers and administrators in making data-driven decisions for urban planning and land allocation.</li>
                    <li>Provided a foundation for long-term sustainable land management in Juba.</li>
                </ul>

                <h4 class="text-lg font-bold mb-3">Skills Shown</h4>
                <p class="text-gray-700 mb-6">GIS Mapping | Database Management | QGIS | Dashboard Development | Project Supervision</p>

                <h4 class="text-lg font-bold mb-3">Technologies Used</h4>
                <div class="flex flex-wrap gap-2 mb-6">
                    <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">QGIS</span>
                    <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">PostgreSQL/PostGIS</span>
                    <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">GIS Mapping</span>
                    <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Real-time Dashboard</span>
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
                    <li>NDVI analysis for detecting sugarcane presence, growth development, and overall crop health.</li>
                    <li>Remote sensing workflows to process and analyze satellite imagery efficiently.</li>
                    <li>Designing monitoring tools for crop health and irrigation optimization.</li>
                    <li>Integrating outputs into a decision-support platform for farmers and agricultural managers.</li>
                </ul>

                <h4 class="text-lg font-bold mb-3">Impact</h4>
                <p class="text-gray-700 mb-4">The system transformed sugarcane monitoring in West Kenya by:</p>
                <ul class="list-disc list-outside text-gray-700 mb-6 space-y-1 pl-5">
                    <li>Enabling farmers to track crop health in near real-time.</li>
                    <li>Helping optimize irrigation, fertilizer use, and pest control.</li>
                    <li>Improving yield forecasting and resource allocation.</li>
                    <li>Supporting food security and agricultural sustainability in the region.</li>
                </ul>

                <h4 class="text-lg font-bold mb-3">Skills Shown</h4>
                <p class="text-gray-700 mb-6">NDVI Analysis | Remote Sensing | Crop Monitoring | Geospatial Analysis | Google Earth Engine</p>

                <h4 class="text-lg font-bold mb-3">Technologies Used</h4>
                <div class="flex flex-wrap gap-2 mb-6">
                    <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Google Earth Engine</span>
                    <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Remote Sensing</span>
                    <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">NDVI Analysis</span>
                    <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Crop Monitoring Tools</span>
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

    // Contact form submission logic
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would add your form submission logic, e.g., using Fetch API to send data to a backend or a service like Formspree.
            alert('Thank you for your message! I will get back to you shortly.');
            contactForm.reset();
        });
    }
});