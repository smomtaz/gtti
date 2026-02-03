// STAR Stories Data
const starStories = [
    {
        id: 1,
        title: "LA Metro Transit Speed & Reliability",
        subtitle: "Lead DS + PM - Continuous Monitoring System",
        priority: "high",
        tags: ["geospatial", "PM", "stakeholder-mgmt", "production-system"],
        situation: "LA Metro needed repeatable methodology for ongoing speed/reliability measurement using APC data",
        task: "Lead data scientist and PM, develop system for continuous corridor performance monitoring",
        action: [
            "Designed algorithm to process APC data at scale",
            "Built evaluation framework for performance metrics",
            "Created automated dashboard for continuous monitoring",
            "Collaborated with transit planners to define KPIs"
        ],
        result: "Delivered system used for ongoing monitoring, led to service improvements, reduced manual analysis time",
        whyItWorks: "Shows geospatial analytics, stakeholder management, production system, similar to Altitude's work",
        relevantQuestions: [
            "Tell me about a time you managed a project as both PM and technical lead",
            "Describe building a production analytics system"
        ]
    },
    {
        id: 2,
        title: "Apple/Google Privacy Issue - LBS Data",
        subtitle: "Data Quality & Anomaly Detection",
        priority: "high",
        tags: ["data-quality", "anomaly-detection", "debugging", "communication"],
        situation: "RSG LBS data showing cross patterns in unexpected locations, unclear if anomaly or real phenomenon",
        task: "Investigate root cause and determine data validity",
        action: [
            "Conducted time-series analysis to identify when pattern started",
            "Cross-referenced with external privacy policy changes",
            "Identified Apple/Google location snapping due to privacy updates",
            "Developed filtering algorithm to handle systematic errors",
            "Documented findings for team and clients"
        ],
        result: "Prevented client misinterpretation of data, improved data quality pipeline, saved hours of manual review",
        whyItWorks: "Shows analytical thinking, domain expertise, communication - exactly what Robert asked about",
        relevantQuestions: [
            "Tell me about handling data quality issues in production",
            "Describe debugging a complex technical problem"
        ]
    },
    {
        id: 3,
        title: "LOCUS Mode Split Feature",
        subtitle: "Cross-Functional Product Development",
        priority: "high",
        tags: ["product-dev", "R&D-to-production", "cross-functional", "innovation"],
        situation: "LOCUS platform needed mode split capability for transportation planners, no existing solution in LBS data",
        task: "Design and implement mode split detection from passive location data",
        action: [
            "Researched classification approaches from literature",
            "Collaborated with product team on requirements",
            "Developed algorithm using speed, trajectory patterns, network matching",
            "Validated against ground truth data",
            "Worked with dev team for production deployment"
        ],
        result: "Feature now core to LOCUS platform, used by agencies, generated revenue",
        whyItWorks: "Shows R&D → production, cross-functional work, innovation, impact",
        relevantQuestions: [
            "Walk me through building a geospatial analytics product from scratch",
            "Describe moving from research to production"
        ]
    },
    {
        id: 4,
        title: "Connecticut Workforce Mobility Study",
        subtitle: "Stakeholder Management Under Ambiguity",
        priority: "high",
        tags: ["ambiguous-requirements", "stakeholder-mgmt", "dashboard", "government-clients"],
        situation: "Connecticut Office of Workforce Solutions needed to design pilot study for disadvantaged populations' commute access, but requirements were vague",
        task: "As Lead Data Scientist, translate unclear policy needs into technical solution, analyze workforce mobility gaps, design accessible decision-support tool",
        action: [
            "Conducted stakeholder interviews with multiple CT departments to clarify needs",
            "Proposed Replica data + GTFS analysis to quantify transit accessibility gaps",
            "Developed Python-based data pipeline processing passive big data",
            "Built interactive Shiny dashboard with geospatial visualizations",
            "Created landscape analysis showing employment, transit access, travel patterns by demographic",
            "Facilitated feedback sessions with policy team to refine recommendations",
            "Translated findings into actionable pilot design for low-income commuters"
        ],
        result: "Delivered $40K project on time. Dashboard used to design pilot program. Client praised accessibility of methodology. Identified specific populations and corridors for intervention.",
        whyItWorks: "Demonstrates ability to work with government stakeholders (like Geotab's DOT clients), translate technical work into accessible visualizations, build decision-support tools from mobility data",
        relevantQuestions: [
            "Tell me about communicating complex technical concepts to non-technical stakeholders",
            "Describe working with ambiguous or changing requirements"
        ]
    },
    {
        id: 5,
        title: "Freight O-D Pipeline + Geotab Integration",
        subtitle: "Product Ownership & Scaling",
        priority: "high",
        tags: ["product-owner", "geotab-data", "AWS", "scalability"],
        situation: "RSG needed scalable freight O-D analysis capability to serve multiple MPOs (SEMCOG, SRTC, MCCOG), but had one-off project scripts that weren't reusable or maintainable",
        task: "As Data Scientist & Product Owner, transform project-specific code into versioned, modular product while managing ongoing client deliverables",
        action: [
            "Designed modular architecture with reusable components for different geographies",
            "Built geospatial algorithms for trip extraction and parking location identification from GPS trajectory data",
            "Implemented AWS workflows for processing large-scale ATRI data",
            "Established version control and documentation standards",
            "Used Agile/Scrum for sprint planning via Azure boards and Asana",
            "⭐ Developed add-on module to ingest Geotab data for project-specific needs",
            "Managed cross-functional team coordination between data science, engineering, and client delivery"
        ],
        result: "Product now serves 3+ MPOs with 80% code reuse across projects. Reduced setup time from weeks to days. Successfully integrated Geotab data module. Enabled additional project revenue through scalability.",
        whyItWorks: "Shows experience building production data products from GPS/trajectory data (like Geotab's core offering), product management skills, and LITERALLY integrated Geotab data - direct relevant experience",
        relevantQuestions: [
            "Tell me about your experience with Geotab data",
            "Describe building scalable data products",
            "How do you approach product ownership?"
        ]
    },
    {
        id: 6,
        title: "I-93 Corridor - Connected Vehicle Analytics",
        subtitle: "Most Relevant to Geotab!",
        priority: "high",
        tags: ["connected-vehicle", "INRIX", "Wejo", "telematics", "DOT-client"],
        situation: "New Hampshire DOT needed to understand I-93 corridor congestion patterns to inform infrastructure investment, with particular concern about weekend traffic surges that traditional counting methods weren't capturing",
        task: "As Lead Data Scientist, analyze connected vehicle data (INRIX, Wejo) to identify congestion hotspots, peak patterns, and diversion routes",
        action: [
            "Processed connected vehicle telemetry data from multiple vendors",
            "Developed geospatial algorithms to identify diversion routes",
            "Built temporal analysis comparing weekday vs. weekend patterns",
            "Created heat maps showing congestion by day-of-week and time-of-day",
            "Identified specific weekend surge phenomenon not previously documented",
            "Developed recommendations for corridor management and infrastructure investment",
            "Built Tableau visualizations for NHDOT stakeholder presentations"
        ],
        result: "Identified critical weekend congestion hotspots that traditional methods missed. Provided data-driven evidence for infrastructure prioritization. Client used findings for project scoping and funding justification.",
        whyItWorks: "Directly analogous to Altitude's work - using connected vehicle telemetry for transportation planning insights, serving DOT clients, identifying patterns in commercial vehicle data. Shows understanding of telematics data challenges",
        relevantQuestions: [
            "Tell me about working with connected vehicle data",
            "Describe a project with DOT clients"
        ]
    },
    {
        id: 7,
        title: "Prologis Warehouse Analytics",
        subtitle: "Fleet/Logistics Client - CRITICAL for Geotab",
        priority: "high",
        tags: ["logistics", "fleet", "site-selection", "freight", "prologis"],
        situation: "Prologis, a major logistics park operator, needed to understand travel patterns at their 1,800-acre Central Valley Gateway facility to proactively plan for network deficiencies and infrastructure needs",
        task: "As project lead, develop cost-effective data collection approach combining multiple sources, then build quick-response tool for data-driven site selection and infrastructure planning",
        action: [
            "Coordinated driveway vehicle classification counts at 40 warehouse buildings",
            "Site-visited each building to observe operations and classify buildings",
            "Used StreetLight freight metrics for O-D, worker home locations, trip demographics",
            "Fused two datasets - factored StreetLight patterns using classification counts",
            "Developed absolute trip making, distribution patterns, and VMT metrics",
            "Created trip generation rates per KSF and per employee by building type",
            "Developed countywide VMT performance metric for SB 743 CEQA compliance"
        ],
        result: "Comprehensive dataset of travel generated by Central Valley Gateway. Validated quick-response modeling t
