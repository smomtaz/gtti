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
        result: "Comprehensive dataset of travel generated by Central Valley Gateway. Validated quick-response modeling tool for future network planning. Regional average VMT metric for transportation impact determination. Informed infrastructure improvements for labor and freight movements. Scalable methodology for other logistics parks.",
        whyItWorks: "Prologis is EXACTLY Geotab's target customer (logistics parks, freight). Shows site selection analytics, VMT performance metrics, multi-source data integration, trip generation rates - all core freight analytics",
        relevantQuestions: [
            "Tell me about experience with fleet/logistics clients",
            "Describe multi-source data fusion projects"
        ]
    },
    {
        id: 8,
        title: "Mentoring Interns at RSG",
        subtitle: "Team Development & Leadership",
        priority: "medium",
        tags: ["mentoring", "leadership", "team-building"],
        situation: "RSG hired multiple interns/junior analysts, needed technical mentorship",
        task: "Mentor interns while delivering on project commitments",
        action: [
            "Designed structured onboarding process",
            "Paired interns with progressively complex tasks",
            "Conducted weekly 1:1s for feedback",
            "Created internal documentation and tutorials",
            "Involved them in client presentations when appropriate"
        ],
        result: "Interns converted to full-time, improved team capacity, developed leadership skills",
        whyItWorks: "Shows leadership, teaching ability, team building - Natalie asked about this",
        relevantQuestions: [
            "Tell me about mentoring junior team members",
            "How do you develop team members?"
        ]
    },
    {
        id: 9,
        title: "NJTPA E-Commerce Freight Study",
        subtitle: "Innovation Under Constraints",
        priority: "medium",
        tags: ["freight", "innovation", "creative-problem-solving"],
        situation: "North Jersey Transportation Planning Authority needed to incorporate e-commerce delivery impacts into their 2050 long-range freight plan, but no direct data source existed for last-mile delivery patterns at zonal level",
        task: "Lead technical effort to derive truck movements from e-commerce shopping behavior despite lack of direct measurement data",
        action: [
            "Researched literature and industry practices for estimation approaches",
            "Built heuristic algorithms linking online retail behaviors to delivery patterns",
            "Integrated warehouse/distribution center location data with demographic data",
            "Developed destination choice models for delivery assignments",
            "Validated outputs against available freight data sources",
            "Created spatial visualizations showing delivery density and future forecasts",
            "Collaborated with regional planners to refine assumptions"
        ],
        result: "Methodology adopted for 2050 regional freight plan. Provided first-ever zonal-level e-commerce delivery estimates for NJTPA region. Approach documented for replication by other MPOs. Informed infrastructure planning for delivery vehicle impacts.",
        whyItWorks: "Demonstrates creativity in deriving insights from limited data, freight analytics expertise (Geotab's truck focus), building custom algorithms for planning use cases",
        relevantQuestions: [
            "Describe working with limited or imperfect data",
            "Tell me about creative problem-solving"
        ]
    },
    {
        id: 10,
        title: "BigQuery Learning - TerraCity",
        subtitle: "Rapid Technology Adoption",
        priority: "low",
        tags: ["learning-agility", "BigQuery", "cloud"],
        situation: "TerraCity needed me productive on BigQuery within two weeks for Colorado First/Last Mile Rail Analytics project. I'd never used it.",
        task: "Learn BigQuery quickly and build production data pipeline for statewide rail accessibility analysis",
        action: [
            "Identified minimum viable knowledge: nested GTFS queries, spatial functions, window functions, cost optimization",
            "Learned by doing - started writing project queries day one",
            "Leveraged transferable knowledge from SQL/Pandas/AWS",
            "Asked teammate to review first queries for efficiency",
            "Kept personal 'BigQuery gotchas' document"
        ],
        result: "Within 2 weeks built complete pipeline ingesting GTFS from 15+ agencies, spatial joins with Census data, temporal accessibility calculations. Processed millions of records efficiently under budget. Became team's BigQuery expert.",
        whyItWorks: "Shows learning agility, self-directed learning, connects directly to Geotab's stack (they use BigQuery)",
        relevantQuestions: [
            "Tell me about learning a new technology quickly",
            "Describe your BigQuery experience"
        ]
    },
    {
        id: 11,
        title: "VisionEval Product Management",
        subtitle: "Federal Client, Product Roadmap",
        priority: "medium",
        tags: ["product-mgmt", "federal-client", "roadmap", "advisory-committees"],
        situation: "FHWA needed improvements to VisionEval, an open-source strategic planning platform. Project involved multiple stakeholders (FHWA, Oregon Metro, ODOT) and required coordinating both technical development and advisory committees",
        task: "As Product Manager and Developer, develop roadmap, sequence deliverables to meet timelines and budgets, lead software development team using mixed methodologies",
        action: [
            "Developed comprehensive roadmap for platform enhancements",
            "Managed advisory committees for each task (stakeholder coordination)",
            "Led software development team using both waterfall and agile approaches",
            "Applied VisionEval in Oregon Metro's EMAT framework",
            "Addressed uncertainty across hundreds of scenarios for policy planning"
        ],
        result: "Successfully delivered platform improvements on-time and on-budget. Oregon Metro adopted enhanced framework for 2050 planning. Effective stakeholder management across federal, state, and regional agencies. Demonstrated versatility in project management methodologies.",
        whyItWorks: "Shows product management role, managing advisory committees, Agile + Waterfall approaches, roadmap development, federal client experience",
        relevantQuestions: [
            "Tell me about product management experience",
            "Describe managing complex stakeholder ecosystems"
        ]
    },
    {
        id: 12,
        title: "SEMCOG Freight Error - Lesson Learned",
        subtitle: "Failure & Recovery",
        priority: "medium",
        tags: ["failure", "learning", "accountability"],
        situation: "Processing ATRI truck GPS data for SEMCOG freight O-D matrices. Built algorithm to identify 'parking locations' where trucks stopped >30 minutes, assuming these were freight destinations",
        task: "Generate freight O-D matrices for regional planning",
        action: [
            "Algorithm worked, delivered results to client",
            "Client came back confused - seeing massive truck volumes at residential areas and parks",
            "Made flawed assumption: didn't account for driver breaks, shift changes, overnight parking",
            "Called client directly, took full ownership - 'This is my error, flawed assumption about driver behavior'",
            "Fixed properly: Added land use filtering, trip purpose classification using temporal patterns",
            "Created internal wiki 'Freight Data Gotchas' to document lesson",
            "Built validation framework: spot-checking on Google Maps, cross-validation with ground truth"
        ],
        result: "SEMCOG appreciated how we handled recovery. Revised methodology more robust, used for 3 follow-on projects. Team learned from documented gotchas.",
        whyItWorks: "Shows humility, accountability, learning from failure, systematic improvement, building team knowledge",
        relevantQuestions: [
            "Tell me about a time you made a mistake",
            "Describe failure and what you learned"
        ]
    }
];

// Q&A Data
const qaData = [
    {
        category: "Geotab-Specific Questions",
        questions: [
            {
                question: "Have you worked with Geotab data before?",
                answer: `Yes, actually - in a couple of different ways.

At RSG, I built an add-on module for our freight pipeline that specifically ingested Geotab data. We were serving multiple MPOs - SEMCOG, SRTC, MCCOG - and one of them had Geotab data they wanted incorporated into the analysis. So I worked with the GPS trajectory structure, dealt with the usual challenges - trip segmentation, identifying parking locations, filtering noise.

But here's what's interesting - I've also been on the other side as a user of your Altitude platform. I built data ingestion pipelines using Altitude's APIs to pull O-D metrics for custom TAZ zones. So I know your product from both angles - processing raw Geotab data and using the analytics platform.

And there's a third connection - I was a founding member of LOCUS at Cambridge Systematics, and that platform now uses Geotab truck data as a core feature. So I've seen how your data fits into the broader transportation analytics ecosystem.`,
                tags: ["geotab", "experience"]
            },
            {
                question: "Why are you interested in Geotab specifically?",
                answer: `Honestly, it's the combination of three things.

First - I've actually used your products. Both the raw data and Altitude. So when I read the job description, I wasn't thinking 'oh, that sounds interesting' - I was thinking 'I've literally done this before.' That's rare in job searching.

Second - perfect customer alignment. I've spent seven years at Cambridge and RSG serving DOTs, MPOs, transit agencies. These are your core customers. I know how they think, what they need, how they make decisions. I've been on dozens of client calls explaining geospatial analytics to transportation planners. That's exactly what this role needs.

But third, and this is the part that really excites me - you're expanding beyond traditional transportation planning into insurance, EV charging, logistics optimization. That's where I want to be. Taking proven transportation analytics methods and applying them to new problems. I don't want to just keep doing the same transit studies forever. I want to grow into adjacent domains while leveraging my transportation expertise.

Also, I was a founding member of LOCUS, which now uses your data. There's something satisfying about potentially working directly with the company whose data I integrated years ago. Feels like a natural evolution.`,
                tags: ["motivation", "fit"]
            },
            {
                question: "What experience do you have with our types of customers - DOTs, MPOs?",
                answer: `That's actually been my entire career for the last seven years.

At Cambridge, I worked directly with New Hampshire DOT on the I-93 corridor study, Connecticut DOT on multiple projects, Oregon DOT and Metro on VisionEval. At RSG, we served LA Metro, Boston MBTA, Denver RTD, San Diego NCTD for transit work. For freight, I worked with SEMCOG, SRTC, MCCOG, NJTPA, Port Authority of NY/NJ.

What I've learned is these agencies have very specific characteristics.

First - they're not purely technical organizations. You're talking to transportation planners who understand the domain deeply but may not be data scientists. So you have to translate. When I presented the Connecticut dashboard, I didn't talk about clustering algorithms - I talked about 'populations with limited commute access.'

Second - procurement is slow and bureaucratic. Projects take 6-12 months from RFP to kickoff. You need patience.

Third - they care deeply about equity and public impact. This isn't corporate analytics where you're optimizing revenue. You're informing infrastructure decisions that affect communities for decades. That's what makes it meaningful.

Fourth - budgets are tight. A $40K project is significant for them. You have to be efficient and scrappy.

But what I love about these clients is they're genuinely trying to solve hard problems with limited resources. I've been on probably 50+ client calls with DOT planners and MPO boards. I know the questions they ask, the objections they raise, what convinces them. That's exactly what this role needs.`,
                tags: ["customers", "domain-expertise"]
            }
        ]
    },
    {
        category: "Technical Depth Questions",
        questions: [
            {
                question: "Tell me about a time you had to debug a complex data quality issue",
                answer: `Oh, this is a good one. So at RSG, we were processing LBS data and started seeing these weird cross patterns in the middle of nowhere - literally in rural areas where there shouldn't be any dense activity.

At first, I thought it might be a processing error on our end. So I went back and checked our pipeline - validated the code, checked coordinate transformations, everything looked fine. The crosses were in the raw data itself.

Then I wondered if it was actually real behavior - maybe truck stops or something? But the pattern was too systematic. And it started appearing suddenly around mid-2021 - it wasn't there in 2020 data.

So I did a time-series analysis to pinpoint exactly when it started, then I started Googling around the same timeframe. Turns out, Apple and Google both pushed major privacy updates in their operating systems that started snapping location data to grid points when precision wasn't needed. That's what was creating the crosses.

The tricky part was - this wasn't noise we could just filter out universally, because some of those snapped locations were still useful for certain analyses. So I built a classification algorithm that identified whether a location point was likely privacy-snapped versus real, based on spatial clustering patterns and temporal consistency.

I documented the whole thing and shared it with the team and our clients. It saved us from making wrong interpretations.

What I learned from that was - when you see anomalies, don't just assume data error or real phenomenon. Often it's systemic issues from upstream data collection changes. You have to think about the whole data generation process, not just your pipeline.`,
                tags: ["debugging", "data-quality", "analytical-thinking"]
            },
            {
                question: "Walk me through how you'd approach building a new geospatial analytics feature",
                answer: `Let me use a real example - when I built the mode split detection feature for LOCUS.

I didn't start with the algorithm. I started by talking to people. I asked our product manager - what are clients actually asking for? Turns out they wanted to understand travel behavior by mode to inform transit planning and mode shift policies.

Then I talked to transportation planners on our advisory board - how would you actually use this? What outputs do you need? They told me: 'I need mode split by corridor, by time of day, something I can export to GIS.'

So now I had concrete requirements, not just vague 'build mode detection.'

Next, I did my homework - literature review of existing approaches. Academics had fancy neural network solutions that needed accelerometer data. But we only had passive GPS - lat/lon and timestamps. So I needed something that would work with limited inputs.

I prototyped three approaches quickly on sample data from one metro area - rule-based heuristics, random forest, and a hybrid. The hybrid worked best - use speed thresholds to filter obvious cases, then ML for ambiguous cases, then validate against road and transit networks.

But here's the key part - validation. I didn't just check if the code ran. I validated against household travel surveys, checked if regional mode shares matched Census data, and did spot checks - manually reviewed classified trips on a map to see if they made visual sense.

The accuracy was 85-90% for basic modes, which was good enough for aggregate corridor analysis. So I made the output probabilistic - output confidence scores so clients could set their own thresholds.

After launch, I collected feedback. Clients wanted pedestrian and cyclist separated, TAZ-level aggregation. Each became an enhancement in subsequent releases.

Now it's core to LOCUS, used by 20+ agencies. But it took iteration - the version today is way better than my initial prototype.`,
                tags: ["product-development", "systematic-thinking", "user-focused"]
            },
            {
                question: "How do you approach model validation when ground truth is limited?",
                answer: `This is one of the hardest parts of geospatial analytics. Let me walk through my multi-layered approach.

First layer - internal consistency checks. Does the model produce sensible outputs? For freight O-D, do trip distances follow expected distributions? Do temporal patterns make sense?

Second layer - cross-validation with external sources. Even if you don't have perfect ground truth, you often have partial validation data. For the NJTPA e-commerce study, I didn't have actual last-mile delivery data, but I could validate against:
- Warehouse employment data - do high-employment warehouses show high trip generation?
- Known freight corridors from other studies
- General freight tonnage data from FAF

Third layer - aggregate validation. My model might not be perfect for individual trips, but does it produce reasonable aggregate metrics? For mode split in LOCUS, individual trip classifications might be 85% accurate, but when you aggregate to corridor-level mode share, it matches Census journey-to-work data within ±3%.

Fourth layer - spot checks and visual inspection. I always manually review a sample of results on a map. For the Connecticut study, I'd look at specific origin-destination pairs and ask 'does this make intuitive sense given land use and transit availability?'

Fifth layer - sensitivity analysis. I test how much my results change with different parameter assumptions. If small changes in parameters cause wild swings in outputs, that's a red flag.

What I learned from the SEMCOG freight error is - also validate your conceptual model, not just your technical implementation. My code was correct, but my assumption about truck parking behavior was wrong. Now I always ask domain experts to review my modeling assumptions.`,
                tags: ["validation", "quality", "rigor"]
            }
        ]
    },
    {
        category: "Behavioral Questions",
        questions: [
            {
                question: "Tell me about handling ambiguous requirements from a client",
                answer: `Connecticut Workforce was a perfect example of this.

The client knew they had a problem - disadvantaged populations struggling with commute access - but they didn't know what solution to test. The initial scope was super vague: 'help us understand workforce mobility gaps.' That's not actionable.

So I started with stakeholder interviews. I talked to multiple Connecticut departments - workforce, transportation, economic development. I asked: what do you actually need to decide? What would make this study successful?

Turns out they needed to design a $40K pilot program, but they weren't sure which populations to target, which corridors, what interventions would help.

So I proposed using Replica data combined with GTFS to quantify specific accessibility gaps - not just 'mobility is hard' but 'these specific populations in these specific zones have 2x longer commute times because of lack of evening transit service.'

But here's where it got interesting - the client had already paid for a household survey and wanted us to use it. I felt the survey data was too thin. Instead of just saying 'your data is bad,' I reframed it as complementary. Use Replica for the quantitative baseline, use their survey for the qualitative why.

They agreed. So we combined both.

I also built an interactive Shiny dashboard because I knew the stakeholders were policy people, not data scientists. They needed something they could explore themselves, not just a static PDF report.

The result - they used our dashboard to design their pilot program, and they specifically praised how accessible the methodology was. The ambiguity at the start actually made the final product better because it forced us to really understand their needs.`,
                tags: ["ambiguity", "stakeholder-management", "problem-solving"]
            },
            {
                question: "Tell me about a time you made a mistake. What happened?",
                answer: `Early at RSG, I made an error that was pretty embarrassing but taught me a lot.

I was processing ATRI truck GPS data for SEMCOG to generate freight O-D matrices. I built an algorithm to identify 'parking locations' where trucks stopped for more than 30 minutes, assuming those were freight destinations.

The algorithm worked, the code was clean, results looked reasonable. I delivered it.

Two weeks later, the client came back confused. They were seeing massive truck volumes at residential areas and parks.

What went wrong - I'd made a flawed assumption about driver behavior. I didn't account for driver breaks, shift changes, overnight parking. My algorithm was picking up truck stops, rest areas, even drivers' home locations.

The technical implementation was fine. The conceptual model was wrong.

I felt terrible because my PM had trusted me to own this task. We had to redo it, which pushed our timeline back two weeks.

I called the client directly - didn't make excuses - and said, 'This is my error. I made a flawed assumption.' Then I fixed it properly. I added land use filtering and trip purpose classification.

But the most important thing I did - I created an internal wiki page called 'Freight Data Gotchas' documenting this and other issues. So no one else on the team would make the same mistake.

SEMCOG actually appreciated how we handled it. The revised methodology was way more robust, and they used it for three follow-on projects.

What I learned - validate assumptions, not just code. Now when I build algorithms, I always ask: what am I assuming about human behavior, and what real-world scenarios would break that assumption?`,
                tags: ["failure", "accountability", "learning"]
            },
            {
                question: "How do you handle competing priorities and tight deadlines?",
                answer: `This happened at RSG when I was juggling Connecticut OWS and I-93 corridor study simultaneously.

Connecticut - I was tech lead, three weeks from delivery, dashboard still needed the core accessibility module. That was 2-3 days of focused coding.

Same time, New Hampshire DOT called about I-93 - preliminary results showed unexpected weekend congestion. They wanted validation within 48 hours for a board meeting.

Both were legitimately urgent.

First thing I did - honest assessment. What are the actual consequences? Connecticut had a hard deadline, but could I deliver a minimal version and enhance later? Yes. I-93 needed validation for the board meeting, but did they need full re-analysis or just confirmation the pattern was real? Just confirmation.

I called both clients. Connecticut - I said, 'I'm on track, but the enhanced filtering feature will come in a phase 2 update next week. Is that acceptable?' They said yes. I-93 - I said, 'I can give you preliminary assessment in 24 hours or detailed validation in 48. What's more valuable?' They chose detailed validation.

That bought me breathing room.

Then I ruthlessly time-blocked. Monday morning - 3 hours Connecticut coding. Monday afternoon - I-93 data pull. Tuesday - all day Connecticut. Wednesday - all day I-93.

For Connecticut, I had a junior analyst help with Shiny UI work while I wrote the core analysis code.

Result - both delivered on time. Connecticut client used the dashboard for their pilot design. I-93 - we confirmed the weekend pattern was real tourist traffic. NHDOT presented confidently.

What made it work was clear communication and understanding what 'done' actually meant for each stakeholder.`,
                tags: ["prioritization", "time-management", "communication"]
            }
        ]
    },
    {
        category: "Situational Questions",
        questions: [
            {
                question: "How would you approach expanding Altitude into a new vertical like insurance or EV charging?",
                answer: `I'd start by understanding what's transferable versus what's new.

The core capability - processing telematics data to derive trip patterns, speeds, stops, routes - that's the same whether you're serving DOTs or insurance companies. The infrastructure is transferable.

What changes is the analytics layer and the customer language.

For insurance, they care about risk assessment. So instead of 'congestion hotspots,' you're identifying 'high-incident corridors.' Instead of 'mode split,' you're analyzing 'driving behavior patterns' - harsh braking, speeding, nighttime driving.

I'd approach it like I approached building the mode split feature for LOCUS - talk to the users first. What decisions are insurance underwriters actually making? What data do they currently use? What questions can't they answer?

Then I'd prototype quickly. Take a small dataset - say one metro area for one month - and build the analytics that would answer those questions. Validate with a friendly insurance partner.

For EV charging, it's similar but different. They need predictive demand forecasting - where will charging needs be in 2 years, 5 years? That's about understanding travel patterns, vehicle mix, dwell times.

I'd leverage our existing O-D metrics but add layers - vehicle type classification (if possible from telematics signatures), dwell time analysis, route predictability.

The key principle is - don't rebuild from scratch. Figure out what we already do that's 80% of what they need, then build the 20% that's domain-specific.

And honestly, this excites me. I don't want to just keep doing the same transit studies forever. I want to take proven transportation methods and apply them to new problems.`,
                tags: ["strategy", "product-thinking", "innovation"]
            },
            {
                question: "Tell me about learning a new technology quickly",
                answer: `When I started at TerraCity in February, they needed me productive on BigQuery within two weeks for the Colorado rail analytics project. I'd never used it.

I didn't try to master everything. I identified minimum viable knowledge for this specific project: querying nested GTFS structures, spatial functions for distance calculations, window functions for temporal patterns, basic cost optimization.

I learned by doing in parallel. I spent one evening on Google's quickstart, then on day one I started writing actual project queries. I kept Stack Overflow and BigQuery docs open constantly.

I asked a teammate to review my first few queries to catch obvious inefficiencies.

I also leveraged what I already knew. I understood SQL, geospatial concepts, data pipelines. BigQuery's syntax was different, but the mental model wasn't.

I kept a personal 'BigQuery gotchas' document: 'Don't use SELECT * with partitioned tables, costs skyrocket.'

Within two weeks, I'd built a complete pipeline - ingesting GTFS from 15+ transit agencies, spatial joins with Census data, temporal accessibility calculations. It processed millions of records efficiently and came in under budget on costs.

I ended up being the BigQuery expert on the team for the rest of my contract.

The key was just-in-time learning - learn the specific thing I needed right when I needed it, in context of real work.`,
                tags: ["learning-agility", "self-directed", "BigQuery"]
            }
        ]
    }
];

// Questions to Ask Data
const questionsToAsk = [
    {
        category: "For Jesse (Lead Data Scientist) - Technical",
        questions: [
            { text: "What are the most challenging technical problems the team is working on right now?", priority: "high" },
            { text: "How do you balance R&D exploration with production delivery timelines?", priority: "high" },
            { text: "What does the R&D roadmap look like for Altitude in 2026?", priority: "high" },
            { text: "How does the lead data scientist role support individual contributors on the team?", priority: "medium" },
            { text: "What's the tech stack evolution looking like? Any major migrations or new tools being adopted?", priority: "medium" },
            { text: "How does the team approach technical debt?", priority: "low" },
            { text: "What's the code review and quality assurance process like?", priority: "low" },
            { text: "What opportunities are there for professional development? Conferences, training?", priority: "medium" }
        ]
    },
    {
        category: "For Natalie (Hiring Manager) - Strategic",
        questions: [
            { text: "How do you see this role evolving over the first year?", priority: "high" },
            { text: "What does success look like in the first 90 days for this position?", priority: "high" },
            { text: "How is Altitude's relationship with core Geotab data teams evolving?", priority: "high" },
            { text: "What's your vision for formalizing processes while maintaining the team's agility?", priority: "high" },
            { text: "What's the biggest gap in the team's capabilities right now?", priority: "medium" },
            { text: "How much client interaction should I expect in this role?", priority: "medium" },
            { text: "What's the team culture like? How do you describe the working style?", priority: "low" }
        ]
    },
    {
        category: "For Both - Vision & Direction",
        questions: [
            { text: "What excites you most about Altitude's direction in the next 12-24 months?", priority: "high" },
            { text: "How does the team handle trade-offs between custom client requests and platform scalability?", priority: "high" },
            { text: "Can you tell me about a recent project where the team had to pivot based on new information?", priority: "high" },
            { text: "What's a recent win you're proud of - either technical or client impact?", priority: "medium" },
            { text: "What feedback do you get most often from customers?", priority: "medium" }
        ]
    },
    {
        category: "Strategic & Deep Thinking",
        questions: [
            { text: "I noticed LOCUS now integrates Geotab truck data - how does that partnership work?", priority: "medium" },
            { text: "How do you see autonomous vehicles and connected vehicles changing the telematics analytics landscape?", priority: "low" },
            { text: "What's Altitude's competitive advantage in the market right now?", priority: "medium" }
        ]
    },
    {
        category: "Closing Questions",
        questions: [
            { text: "Based on what we've discussed today, is there anything about my background that gives you pause?", priority: "high" },
            { text: "What would make someone wildly successful versus just adequate in this role?", priority: "medium" },
            { text: "What are the next steps in your interview process, and what's your timeline?", priority: "high" }
        ]
    }
];

// Interview Tips Data
const interviewTips = [
    {
        title: "Before the Interview",
        tips: [
            "Review all STAR stories and practice them out loud",
            "Have 2-3 stories ready that you can adapt to different questions",
            "Research latest Altitude product announcements",
            "Prepare 5-7 thoughtful questions to ask",
            "Test your tech setup (camera, audio, internet)",
            "Have water nearby and dress professionally"
        ]
    },
    {
        title: "During the Interview",
        tips: [
            "Let them guide the conversation naturally",
            "Use STAR format conversationally, not rigidly",
            "Connect answers back to Geotab/Altitude when relevant",
            "Show enthusiasm through examples, not just words",
            "Ask clarifying questions during their questions",
            "Keep energy up, be personable, smile",
            "Take brief notes about key points they mention"
        ]
    },
    {
        title: "Technical Discussion Style",
        tips: [
            "Start with the business context before diving into technical details",
            "Use concrete examples from your projects",
            "Avoid jargon unless they use it first",
            "Be ready to go deeper if they show interest",
            "Acknowledge trade-offs and limitations honestly",
            "Show your thinking process, not just the solution"
        ]
    },
    {
        title: "Key Messages to Emphasize",
        tips: [
            "You've actually used Geotab data and Altitude platform",
            "You understand their customers (DOTs, MPOs) deeply",
            "You combine technical depth with client communication",
            "You're excited about expanding into new verticals",
            "You were founding member of LOCUS (uses their data)",
            "You want to build products that have real impact"
        ]
    },
    {
        title: "Red Flags to Avoid",
        tips: [
            "Don't badmouth previous employers or colleagues",
            "Don't claim expertise you don't have",
            "Don't make excuses for the employment gap",
            "Don't be overly technical without context",
            "Don't forget to ask YOUR questions",
            "Don't be too modest - own your accomplishments"
        ]
    },
    {
        title: "After the Interview",
        tips: [
            "Send thank-you email within 24 hours",
            "Reference specific topics from the conversation",
            "Reiterate your enthusiasm and key fit points",
            "Provide any additional materials if promised",
            "Note any concerns they raised to address in follow-up",
            "Connect on LinkedIn if appropriate"
        ]
    }
];

// Tag definitions for filtering
const allTags = {
    stories: [
        "geospatial", "PM", "stakeholder-mgmt", "production-system",
        "data-quality", "anomaly-detection", "debugging", "communication",
        "product-dev", "R&D-to-production", "cross-functional", "innovation",
        "ambiguous-requirements", "dashboard", "government-clients",
        "product-owner", "geotab-data", "AWS", "scalability",
        "connected-vehicle", "INRIX", "Wejo", "telematics", "DOT-client",
        "logistics", "fleet", "site-selection", "freight", "prologis",
        "mentoring", "leadership", "team-building",
        "learning-agility", "BigQuery", "cloud",
        "federal-client", "roadmap", "advisory-committees",
        "failure", "accountability"
    ],
    qa: [
        "geotab", "experience", "motivation", "fit",
        "customers", "domain-expertise",
        "debugging", "data-quality", "analytical-thinking",
        "product-development", "systematic-thinking", "user-focused",
        "validation", "quality", "rigor",
        "ambiguity", "stakeholder-management", "problem-solving",
        "failure", "accountability", "learning",
        "prioritization", "time-management", "communication",
        "strategy", "product-thinking", "innovation",
        "learning-agility", "self-directed", "BigQuery"
    ]
};
