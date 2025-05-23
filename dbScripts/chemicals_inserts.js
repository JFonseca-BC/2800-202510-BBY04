db.chemicals.insertOne({
    substance_name: 'Acetone',
    recommended_use: 'Laboratory chemicals.',
    supplier: {
        name: 'Fisher Scientific',
        address: 'One Reagent Lane Fair Lawn, NJ 07410',
        phone: '(201) 796-7100',
        emergency_phone: '1-201-796-7100'
    },
    hazard_identification: {
        hazards: [
            'Highly flammable liquid and vapor.',
            'Causes serious eye irritation.',
            'May cause drowsiness or dizziness.',
            'May cause damage to organs through prolonged or repeated exposure.'
        ]
    },
    composition_information: {
        component: 'Acetone',
        cas_no: '67-64-1',
        weight: '>95%'
    },
    first_aid_measures: {
        eye_contact: 'Rinse immediately with plenty of water, also under the eyelids, for at least 15 minutes. Obtain medical attention.',
        skin_contact: 'Wash off immediately with plenty of water for at least 15 minutes. Obtain medical attention.',
        inhalation: 'Move to fresh air. If breathing is difficult, give oxygen. Get medical attention immediately if symptoms occur.',
        ingestion: 'Do not induce vomiting. Obtain medical attention.',
        symptoms_effects: 'Breathing difficulties. Symptoms of overexposure may be headache, dizziness, tiredness, nausea and vomiting. May cause pulmonary edema.',
        notes_to_physician: 'Treat symptomatically.'
    },
    fire_fighting_measures: {
        extinguishing_media: 'CO2, dry chemical, dry sand, alcohol-resistant foam. Water spray.',
        special_instructions: 'Cool closed containers exposed to fire with water spray.'
    },
    accidental_release_measures: {
        personal_precautions: 'Use personal protective equipment. Ensure adequate ventilation. Remove all sources of ignition. Take precautionary measures against static discharges.',
        environmental_precautions: 'Should not be released into the environment.',
        cleanup_methods: 'Keep people away from and upwind of spill/leak. Avoid contact with skin, eyes and inhalation of vapors.'
    },
    handling_and_storage: {
        handling: 'Wear personal protective equipment. Ensure adequate ventilation. Keep away from open flames, hot surfaces and sources of ignition. Take precautionary measures against static discharges. Use only non-sparking tools. Use explosion-proof equipment. Do not breathe vapors or spray mist. Do not get in eyes, on skin, or on clothing. To avoid ignition of vapors by static electricity discharge, all metal parts of the equipment must be grounded.',
        storage: 'Flammables area. Keep containers tightly closed in a dry, cool and well-ventilated place. Keep away from heat and sources of ignition.'
    },
    exposure_controls_personal_protection: {
        engineering_measures: 'Ensure adequate ventilation, especially in confined areas. Ensure that eyewash stations and safety showers are close to the workstation location. Use explosion-proof electrical/ventilating/lighting/equipment.',
        eye_face_protection: 'Wear appropriate protective eyeglasses or chemical safety goggles as described by OSHA eye and face protection regulations in 29 CFR 1910.133 or European Standard EN166.',
        skin_body_protection: 'Wear appropriate protective gloves and clothing to prevent skin exposure.',
        respiratory_protection: 'Follow the OSHA respirator regulations found in 29 CFR 1910.134 or European Standard EN 149. Use a NIOSH/MSHA or European Standard EN 149 approved respirator if exposure limits are exceeded or if irritation or other symptoms are experienced.',
        hygiene_measures: 'Handle in accordance with good industrial hygiene and safety practice.'
    },
    physical_and_chemical_properties: {
        appearance: 'Colorless liquid',
        odor: 'Sweet characteristic odor',
        pH: '7',
        solubility: 'Soluble in water',
        melting_point: '-95 °C / -139 °F',
        boiling_point: '56 °C / 132.8 °F'
    },
    stability_and_reactivity: {
        reactivity: 'No known reactive hazards.',
        stability: 'Stable under normal conditions.',
        conditions_to_avoid: 'Avoid heat, flames and sparks.',
        incompatible_materials: [
            'Strong oxidizing agents',
            'Strong reducing agents',
            'Strong bases',
            'Peroxides',
            'Halogenated compounds',
            'Alkali metals',
            'Amines'
        ]
    },
    toxicological_information: {
        symptoms: 'Symptoms of overexposure may be headache, dizziness, tiredness, nausea and vomiting. May cause pulmonary edema.'
    },
    ecological_information: {
        environmental_impact: 'Avoid release to the environment, but persistence is unlikely based on information available. Will likely be mobile in the environment due to its volatility.'
    },
    disposal_considerations: {
        disposal_guidance: 'Chemical waste generators must determine whether a discarded chemical is classified as a hazardous waste. Chemical waste generators must also consult local, regional, and national hazardous waste regulations to ensure complete and accurate classification.'
    },
    transport_information: {
        DOT: {
            UN_no: 'UN1090',
            proper_shipping_name: 'ACETONE',
            hazard_class: '3',
            packing_group: 'II'
        }
    },
    regulatory_information: {
        details: 'Please refer to provincial and federal sources for more details like Canada Occupational Health and Safety Regulations.'
    },
    other_information: {
        information_date: '12-Mar-2014'
    }
});

db.chemicals.insertOne({
    substance_name: 'Ammonia',
    recommended_use: 'Household cleaning, glass cleaner, fertilizer production.',
    supplier: {
        name: 'The Clorox Company',
        address: '1221 Broadway, Oakland, CA 94612',
        phone: '(510) 271-7000',
        emergency_phone: '1-800-446-1014'
    },
    hazard_identification: {
        hazards: 'Toxic if inhaled. Causes severe skin burns and eye damage. May cause respiratory irritation.'
    },
    composition_information: {
        component: 'Ammonium Hydroxide',
        cas_no: '1336-21-6',
        weight: '5-10%'
    },
    first_aid_measures: {
        eye_contact: 'Rinse cautiously with water for several minutes. Remove contact lenses if present. Continue rinsing. Seek medical attention.',
        skin_contact: 'Wash with plenty of soap and water. Seek medical attention if irritation persists.',
        inhalation: 'Move to fresh air. If breathing is difficult, give oxygen. Seek medical attention.',
        ingestion: 'Rinse mouth. Do NOT induce vomiting. Seek medical attention immediately.',
        symptoms_effects: 'Coughing, sore throat, shortness of breath, burns.',
        notes_to_physician: 'Treat symptomatically; monitor for pulmonary edema.'
    },
    fire_fighting_measures: {
        extinguishing_media: 'Water spray, fog, or alcohol-resistant foam.',
        special_instructions: 'Wear full protective gear. Avoid inhalation of fumes.'
    },
    accidental_release_measures: {
        personal_precautions: 'Evacuate area. Use respirator if ventilation is inadequate.',
        environmental_precautions: 'Prevent entry into waterways or sewers.',
        cleanup_methods: 'Neutralize with dilute acid (e.g., vinegar). Absorb with inert material.'
    },
    handling_and_storage: {
        handling: 'Use in well-ventilated areas. Avoid contact with skin/eyes.',
        storage: 'Store in a cool, dry place away from acids and oxidizers.'
    },
    exposure_controls_personal_protection: {
        engineering_measures: 'Local exhaust ventilation.',
        eye_face_protection: 'Safety goggles.',
        skin_body_protection: 'Chemical-resistant gloves and apron.',
        respiratory_protection: 'NIOSH-approved respirator if airborne exposure is high.',
        hygiene_measures: 'Wash hands after handling.'
    },
    physical_and_chemical_properties: {
        appearance: 'Colorless liquid',
        odor: 'Pungent, sharp',
        pH: '11.6',
        boiling_point: '38 °C (100 °F)',
        solubility: 'Miscible in water'
    },
    stability_and_reactivity: {
        reactivity: 'Reacts violently with acids, halogens.',
        stability: 'Stable under normal conditions.',
        conditions_to_avoid: 'Heat, open flames.',
        incompatible_materials: 'Bleach, acids, metals.'
    },
    toxicological_information: {
        symptoms: 'Burns, coughing, pulmonary edema.'
    },
    ecological_information: {
        environmental_impact: 'Toxic to aquatic life.'
    },
    disposal_considerations: {
        disposal_guidance: 'Neutralize before disposal. Follow local regulations.'
    },
    transport_information: {
        UN_no: 'UN2672',
        proper_shipping_name: 'AMMONIA SOLUTION',
        hazard_class: '8',
        packing_group: 'III'
    },
    regulatory_information: {
        details: 'OSHA PEL: 50 ppm (TWA).'
    },
    other_information: {
        information_date: '2023-10-01'
    }
});

db.chemicals.insertOne({
    substance_name: 'Acetic Acid',
    recommended_use: 'Used as a food preservative and flavoring agent; also in household cleaning.',
    supplier: {
        name: 'Heinz',
        address: 'P.O. Box 57, Pittsburgh, PA 15230',
        phone: '(800) 255-5750',
        emergency_phone: '1-800-255-5750'
    },
    hazard_identification: {
        hazards: 'Causes serious eye irritation. May cause respiratory irritation.'
    },
    composition_information: {
        component: 'Acetic Acid',
        cas_no: '64-19-7',
        weight: '4–8% in household vinegar'
    },
    first_aid_measures: {
        eye_contact: 'Rinse cautiously with water for several minutes. Remove contact lenses if present and easy to do. Continue rinsing.',
        skin_contact: 'Wash with plenty of soap and water.',
        inhalation: 'Remove person to fresh air and keep comfortable for breathing.',
        ingestion: 'Rinse mouth. Do NOT induce vomiting.',
        symptoms_effects: 'May cause irritation to eyes, skin, and respiratory tract.',
        notes_to_physician: 'Treat symptomatically.'
    },
    fire_fighting_measures: {
        extinguishing_media: 'Use water spray, alcohol-resistant foam, dry chemical or carbon dioxide.',
        special_instructions: 'Wear self-contained breathing apparatus for firefighting if necessary.'
    },
    accidental_release_measures: {
        personal_precautions: 'Avoid breathing vapors. Ensure adequate ventilation. Evacuate personnel to safe areas.',
        environmental_precautions: 'Prevent further leakage or spillage if safe to do so. Do not let product enter drains.',
        cleanup_methods: 'Contain spillage, and then collect with non-combustible absorbent material.'
    },
    handling_and_storage: {
        handling: 'Avoid contact with skin and eyes. Avoid inhalation of vapor or mist.',
        storage: 'Store in cool place. Keep container tightly closed in a dry and well-ventilated place.'
    },
    exposure_controls_personal_protection: {
        engineering_measures: 'Ensure adequate ventilation, especially in confined areas.',
        eye_face_protection: 'Safety glasses with side-shields conforming to EN166.',
        skin_body_protection: 'Wear protective gloves and protective clothing.',
        respiratory_protection: 'Where risk assessment shows air-purifying respirators are appropriate, use a full-face respirator.',
        hygiene_measures: 'Handle in accordance with good industrial hygiene and safety practice.'
    },
    physical_and_chemical_properties: {
        appearance: 'Colorless liquid',
        odor: 'Pungent, vinegar-like',
        pH: '2.4 (5% solution)',
        solubility: 'Miscible with water',
        melting_point: '16.6 °C (61.9 °F)',
        boiling_point: '118 °C (244 °F)'
    },
    stability_and_reactivity: {
        reactivity: 'Reacts with oxidizing agents.',
        stability: 'Stable under recommended storage conditions.',
        conditions_to_avoid: 'Heat, flames, sparks.',
        incompatible_materials: 'Oxidizing agents, strong bases.'
    },
    toxicological_information: {
        symptoms: 'Irritation to eyes, skin, and respiratory tract.'
    },
    ecological_information: {
        environmental_impact: 'Low toxicity to aquatic life; biodegradable.'
    },
    disposal_considerations: {
        disposal_guidance: 'Dispose of contents/container in accordance with local/regional/national/international regulations.'
    },
    transport_information: {
        UN_no: 'UN2789',
        proper_shipping_name: 'Acetic acid solution',
        hazard_class: '8',
        packing_group: 'II'
    },
    regulatory_information: {
        details: 'Complies with food-grade regulations when diluted appropriately.'
    },
    other_information: {
        information_date: '01-Jan-2021'
    }
});


db.chemicals.insertOne({
    substance_name: 'Sodium Hypochlorite',
    recommended_use: 'Disinfectant, whitening agent.',
    supplier: {
        name: 'Clorox',
        address: '1221 Broadway, Oakland, CA 94612',
        phone: '(510) 271-7000',
        emergency_phone: '1-800-446-1014'
    },
    hazard_identification: {
        hazards: 'Corrosive. Causes severe skin burns and eye damage. Harmful if swallowed. Releases toxic gases when mixed with acids/ammonia.'
    },
    composition_information: {
        component: 'Sodium Hypochlorite',
        cas_no: '7681-52-9',
        weight: '5-8%'
    },
    first_aid_measures: {
        eye_contact: 'Rinse immediately with plenty of water for at least 15 minutes. Seek medical attention.',
        skin_contact: 'Wash with soap and water. Remove contaminated clothing.',
        inhalation: 'Move to fresh air. Seek medical attention if coughing persists.',
        ingestion: 'Do NOT induce vomiting. Rinse mouth and drink water. Seek medical help.',
        symptoms_effects: 'Burns, nausea, throat swelling.',
        notes_to_physician: 'Monitor for chemical pneumonitis.'
    },
    fire_fighting_measures: {
        extinguishing_media: 'Water spray. Do NOT use CO₂.',
        special_instructions: 'Wear full protective gear.'
    },
    accidental_release_measures: {
        personal_precautions: 'Evacuate area. Wear gloves/goggles.',
        environmental_precautions: 'Prevent runoff into drains.',
        cleanup_methods: 'Dilute with water or absorb with inert material.'
    },
    handling_and_storage: {
        handling: 'Use in well-ventilated areas. Do NOT mix with acids/ammonia.',
        storage: 'Store in a cool, dark place away from metals.'
    },
    exposure_controls_personal_protection: {
        engineering_measures: 'Local exhaust ventilation.',
        eye_face_protection: 'Face shield.',
        skin_body_protection: 'Rubber gloves, apron.',
        respiratory_protection: 'NIOSH-approved mask if mist forms.',
        hygiene_measures: 'Wash hands after use.'
    },
    physical_and_chemical_properties: {
        appearance: 'Clear, pale yellow liquid',
        odor: 'Chlorine-like',
        pH: '11-13',
        boiling_point: '40 °C (104 °F)',
        solubility: 'Completely soluble in water'
    },
    stability_and_reactivity: {
        reactivity: 'Reacts violently with acids, ammonia.',
        stability: 'Decomposes in heat/light.',
        conditions_to_avoid: 'Sunlight, heat.',
        incompatible_materials: 'Ammonia, vinegar, metals.'
    },
    toxicological_information: {
        symptoms: 'Burns, coughing, pulmonary edema.'
    },
    ecological_information: {
        environmental_impact: 'Toxic to aquatic organisms.'
    },
    disposal_considerations: {
        disposal_guidance: 'Dilute and neutralize before disposal.'
    },
    transport_information: {
        UN_no: 'UN1791',
        proper_shipping_name: 'HYPOCHLORITE SOLUTION',
        hazard_class: '8',
        packing_group: 'III'
    },
    regulatory_information: {
        details: 'EPA-registered disinfectant.'
    },
    other_information: {
        information_date: '2023-10-01'
    }
});

db.chemicals.insertOne({
    substance_name: 'Sodium Bicarbonate',
    recommended_use: 'Cooking, cleaning, deodorizing.',
    supplier: {
        name: 'Arm & Hammer',
        address: 'Church & Dwight Co., Inc., Princeton, NJ 08543',
        phone: '1-800-524-1328',
        emergency_phone: '1-800-524-1328'
    },
    hazard_identification: {
        hazards: 'Non-hazardous. May cause mild eye irritation.'
    },
    composition_information: {
        component: 'Sodium Bicarbonate',
        cas_no: '144-55-8',
        weight: '100%'
    },
    first_aid_measures: {
        eye_contact: 'Rinse with water if irritation occurs.',
        skin_contact: 'Wash with soap and water.',
        inhalation: 'Move to fresh air.',
        ingestion: 'Drink water. No medical attention needed unless large amounts are swallowed.',
        symptoms_effects: 'None under normal use.',
        notes_to_physician: 'Not applicable.'
    },
    fire_fighting_measures: {
        extinguishing_media: 'Water, CO₂, dry chemical.',
        special_instructions: 'Non-flammable.'
    },
    accidental_release_measures: {
        personal_precautions: 'Sweep up and dispose.',
        environmental_precautions: 'No significant risk.',
        cleanup_methods: 'Sweep or vacuum.'
    },
    handling_and_storage: {
        handling: 'No special precautions.',
        storage: 'Store in a dry place.'
    },
    exposure_controls_personal_protection: {
        engineering_measures: 'None required.',
        eye_face_protection: 'Safety glasses if dusting.',
        skin_body_protection: 'Gloves if handling large quantities.',
        respiratory_protection: 'Dust mask if airborne.',
        hygiene_measures: 'Wash hands after use.'
    },
    physical_and_chemical_properties: {
        appearance: 'White powder',
        odor: 'Odorless',
        pH: '8.4 (1% solution)',
        melting_point: '50 °C (122 °F) (decomposes)',
        solubility: '9 g/100 mL (water)'
    },
    stability_and_reactivity: {
        reactivity: 'Reacts with acids to release CO₂.',
        stability: 'Stable.',
        conditions_to_avoid: 'Moisture, strong acids.',
        incompatible_materials: 'Vinegar, citric acid.'
    },
    toxicological_information: {
        symptoms: 'None under normal use.'
    },
    ecological_information: {
        environmental_impact: 'Not harmful.'
    },
    disposal_considerations: {
        disposal_guidance: 'Dispose as normal waste.'
    },
    transport_information: {
        UN_no: 'Non-hazardous',
        proper_shipping_name: 'Not regulated',
        hazard_class: 'N/A',
        packing_group: 'N/A'
    },
    regulatory_information: {
        details: 'GRAS (FDA).'
    },
    other_information: {
        information_date: '2023-10-01'
    }
});

db.chemicals.insertOne({
    substance_name: 'Citric Acid',
    recommended_use: 'Food additive, cleaning agent.',
    supplier: {
        name: 'NOW Foods',
        address: '395 S Glen Ellyn Rd, Bloomingdale, IL 60108',
        phone: '(630) 545-9600',
        emergency_phone: '(630) 545-9600'
    },
    hazard_identification: {
        hazards: 'May cause eye irritation. Harmful if swallowed in large amounts.'
    },
    composition_information: {
        component: 'Citric Acid',
        cas_no: '77-92-9',
        weight: '100%'
    },
    first_aid_measures: {
        eye_contact: 'Rinse with water for 15 minutes.',
        skin_contact: 'Wash with soap and water.',
        inhalation: 'Move to fresh air.',
        ingestion: 'Rinse mouth. Drink water.',
        symptoms_effects: 'Irritation, stomach upset.',
        notes_to_physician: 'No specific treatment needed.'
    },
    fire_fighting_measures: {
        extinguishing_media: 'Water, CO₂.',
        special_instructions: 'Non-flammable.'
    },
    accidental_release_measures: {
        personal_precautions: 'Sweep up.',
        environmental_precautions: 'Low risk.',
        cleanup_methods: 'Dilute with water.'
    },
    handling_and_storage: {
        handling: 'Avoid dust formation.',
        storage: 'Store in a dry place.'
    },
    exposure_controls_personal_protection: {
        engineering_measures: 'General ventilation.',
        eye_face_protection: 'Goggles if handling powder.',
        skin_body_protection: 'Gloves.',
        respiratory_protection: 'Dust mask if airborne.',
        hygiene_measures: 'Wash hands after use.'
    },
    physical_and_chemical_properties: {
        appearance: 'White crystalline powder',
        odor: 'Odorless',
        pH: '2.2 (1% solution)',
        melting_point: '153 °C (307 °F)',
        solubility: '59 g/100 mL (water)'
    },
    stability_and_reactivity: {
        reactivity: 'Reacts with bases.',
        stability: 'Stable.',
        conditions_to_avoid: 'High humidity.',
        incompatible_materials: 'Strong bases.'
    },
    toxicological_information: {
        symptoms: 'Mild irritation.'
    },
    ecological_information: {
        environmental_impact: 'Biodegradable.'
    },
    disposal_considerations: {
        disposal_guidance: 'Dispose as normal waste.'
    },
    transport_information: {
        UN_no: 'Non-hazardous',
        proper_shipping_name: 'Not regulated',
        hazard_class: 'N/A',
        packing_group: 'N/A'
    },
    regulatory_information: {
        details: 'GRAS (FDA).'
    },
    other_information: {
        information_date: '2023-10-01'
    }
});

db.chemicals.insertOne({
    substance_name: 'Calcium Carbonate',
    recommended_use: 'Used as an antacid, dietary supplement, and mild abrasive in toothpaste.',
    supplier: {
        name: 'Church & Dwight Co., Inc.',
        address: '500 Charles Ewing Blvd., Ewing, NJ 08628',
        phone: '(800) 833-9532',
        emergency_phone: '1-800-424-9300 (Chemtrec)'
    },
    hazard_identification: {
        hazards: 'May cause mechanical irritation to eyes and respiratory tract.'
    },
    composition_information: {
        component: 'Calcium Carbonate',
        cas_no: '471-34-1',
        weight: '>99%'
    },
    first_aid_measures: {
        eye_contact: 'Rinse thoroughly with water. Seek medical attention if irritation persists.',
        skin_contact: 'Rinse with water. Wash with soap if needed.',
        inhalation: 'Move to fresh air. Seek medical attention if breathing problems occur.',
        ingestion: 'Not expected to be harmful. Rinse mouth.',
        symptoms_effects: 'Coughing or eye irritation due to dust exposure.',
        notes_to_physician: 'Symptomatic treatment.'
    },
    fire_fighting_measures: {
        extinguishing_media: 'Use media appropriate for surrounding fire.',
        special_instructions: 'Material is not flammable.'
    },
    accidental_release_measures: {
        personal_precautions: 'Avoid dust formation. Use adequate ventilation.',
        environmental_precautions: 'Prevent release to water bodies.',
        cleanup_methods: 'Sweep up and place in suitable container.'
    },
    handling_and_storage: {
        handling: 'Minimize dust generation. Avoid contact with eyes.',
        storage: 'Store in a dry, cool, well-ventilated area.'
    },
    exposure_controls_personal_protection: {
        engineering_measures: 'Use general or local exhaust ventilation.',
        eye_face_protection: 'Safety glasses.',
        skin_body_protection: 'Protective gloves recommended.',
        respiratory_protection: 'Dust mask if ventilation is inadequate.',
        hygiene_measures: 'Follow standard hygienic practices.'
    },
    physical_and_chemical_properties: {
        appearance: 'White powder',
        odor: 'Odorless',
        pH: '9.5 (saturated solution)',
        solubility: 'Insoluble in water',
        melting_point: '825 °C (calcination)',
        boiling_point: 'Not applicable'
    },
    stability_and_reactivity: {
        reactivity: 'Reacts with acids to release CO₂.',
        stability: 'Stable under normal conditions.',
        conditions_to_avoid: 'Strong acids.',
        incompatible_materials: 'Acids, ammonium salts.'
    },
    toxicological_information: {
        symptoms: 'Mild eye and respiratory tract irritation.'
    },
    ecological_information: {
        environmental_impact: 'Not expected to pose significant environmental hazard.'
    },
    disposal_considerations: {
        disposal_guidance: 'Dispose of in accordance with local regulations.'
    },
    transport_information: {
        UN_no: 'Not regulated',
        proper_shipping_name: 'Not regulated',
        hazard_class: 'Not regulated',
        packing_group: 'Not regulated'
    },
    regulatory_information: {
        details: 'Listed under FDA and EPA as non-hazardous for typical household use.'
    },
    other_information: {
        information_date: '18-Nov-2020'
    }
});

db.chemicals.insertOne({
    substance_name: 'D-Limonene',
    recommended_use: 'Used as a natural solvent and degreaser, often in citrus-based cleaners.',
    supplier: {
        name: 'Florida Chemical Company, Inc.',
        address: '351 Winter Haven Blvd. NE, Winter Haven, FL 33881',
        phone: '(863) 294-8483',
        emergency_phone: '1-800-424-9300 (Chemtrec)'
    },
    hazard_identification: {
        hazards: 'Flammable liquid and vapor. May cause skin irritation and allergic skin reaction. Very toxic to aquatic life with long lasting effects.'
    },
    composition_information: {
        component: 'D-Limonene',
        cas_no: '5989-27-5',
        weight: '>95%'
    },
    first_aid_measures: {
        eye_contact: 'Rinse with plenty of water. Seek medical attention if irritation develops.',
        skin_contact: 'Wash with soap and water. Remove contaminated clothing.',
        inhalation: 'Remove to fresh air. Seek medical attention if symptoms develop.',
        ingestion: 'Rinse mouth. Do NOT induce vomiting.',
        symptoms_effects: 'Skin redness, dermatitis, coughing if inhaled.',
        notes_to_physician: 'Symptomatic treatment.'
    },
    fire_fighting_measures: {
        extinguishing_media: 'CO₂, dry chemical, foam.',
        special_instructions: 'Use water spray to cool exposed containers.'
    },
    accidental_release_measures: {
        personal_precautions: 'Avoid contact with skin and eyes. Ventilate area.',
        environmental_precautions: 'Prevent entry into waterways.',
        cleanup_methods: 'Absorb with inert material and dispose in accordance with regulations.'
    },
    handling_and_storage: {
        handling: 'Avoid inhalation and contact with skin or eyes. Ground all equipment.',
        storage: 'Store in tightly closed containers in a cool, dry, well-ventilated area away from ignition sources.'
    },
    exposure_controls_personal_protection: {
        engineering_measures: 'Ensure proper ventilation.',
        eye_face_protection: 'Goggles recommended.',
        skin_body_protection: 'Wear chemical-resistant gloves.',
        respiratory_protection: 'NIOSH approved respirator for vapors.',
        hygiene_measures: 'Wash hands after handling.'
    },
    physical_and_chemical_properties: {
        appearance: 'Colorless to pale yellow liquid',
        odor: 'Citrus-like',
        pH: 'Not applicable',
        solubility: 'Insoluble in water',
        melting_point: '-74 °C',
        boiling_point: '176 °C'
    },
    stability_and_reactivity: {
        reactivity: 'Oxidizes on exposure to air.',
        stability: 'Stable under recommended conditions.',
        conditions_to_avoid: 'Heat, flames, sparks.',
        incompatible_materials: 'Strong oxidizers.'
    },
    toxicological_information: {
        symptoms: 'Skin irritation, sensitization, respiratory discomfort.'
    },
    ecological_information: {
        environmental_impact: 'Very toxic to aquatic life.'
    },
    disposal_considerations: {
        disposal_guidance: 'Dispose of according to federal, state and local environmental control regulations.'
    },
    transport_information: {
        UN_no: 'UN2052',
        proper_shipping_name: 'Terpene hydrocarbons, n.o.s. (D-Limonene)',
        hazard_class: '3',
        packing_group: 'III'
    },
    regulatory_information: {
        details: 'Listed under EPA Safer Choice for certain concentrations.'
    },
    other_information: {
        information_date: '03-May-2022'
    }
});

db.chemicals.insertOne({
    substance_name: 'Ethanol',
    recommended_use: 'Used as a disinfectant and solvent in household products.',
    supplier: {
        name: 'Sigma-Aldrich',
        address: '3050 Spruce Street, St. Louis, MO 63103, USA',
        phone: '(800) 325-3010',
        emergency_phone: '1-800-424-9300 (CHEMTREC)'
    },
    hazard_identification: {
        hazards: 'Highly flammable liquid and vapor. Causes serious eye irritation.'
    },
    composition_information: {
        component: 'Ethanol',
        cas_no: '64-17-5',
        weight: '>99%'
    },
    first_aid_measures: {
        eye_contact: 'Rinse cautiously with water for several minutes. Remove contact lenses if present and easy to do. Continue rinsing.',
        skin_contact: 'Wash with plenty of soap and water.',
        inhalation: 'Remove person to fresh air and keep comfortable for breathing.',
        ingestion: 'Rinse mouth. Do NOT induce vomiting.',
        symptoms_effects: 'May cause drowsiness or dizziness.',
        notes_to_physician: 'Treat symptomatically.'
    },
    fire_fighting_measures: {
        extinguishing_media: 'Use water spray, alcohol-resistant foam, dry chemical or carbon dioxide.',
        special_instructions: 'Cool containers with water spray.'
    },
    accidental_release_measures: {
        personal_precautions: 'Remove all sources of ignition. Provide adequate ventilation.',
        environmental_precautions: 'Prevent further leakage or spillage if safe to do so.',
        cleanup_methods: 'Contain spillage, and then collect with non-combustible absorbent material.'
    },
    handling_and_storage: {
        handling: 'Keep away from heat/sparks/open flames/hot surfaces. No smoking.',
        storage: 'Store in a well-ventilated place. Keep container tightly closed.'
    },
    exposure_controls_personal_protection: {
        engineering_measures: 'Ensure adequate ventilation.',
        eye_face_protection: 'Safety glasses with side-shields.',
        skin_body_protection: 'Protective gloves.',
        respiratory_protection: 'In case of insufficient ventilation, wear suitable respiratory equipment.',
        hygiene_measures: 'Handle in accordance with good industrial hygiene and safety practice.'
    },
    physical_and_chemical_properties: {
        appearance: 'Colorless liquid',
        odor: 'Alcohol-like',
        pH: 'Not applicable',
        solubility: 'Completely miscible with water',
        melting_point: '-114.1 °C',
        boiling_point: '78.37 °C'
    },
    stability_and_reactivity: {
        reactivity: 'No dangerous reaction known under conditions of normal use.',
        stability: 'Stable under recommended storage conditions.',
        conditions_to_avoid: 'Heat, flames and sparks.',
        incompatible_materials: 'Oxidizing agents, acids, alkali metals.',
        hazardous_decomposition_products: 'Carbon oxides.'
    },
    toxicological_information: {
        symptoms: 'May cause drowsiness or dizziness. Ingestion may cause gastrointestinal irritation, nausea, vomiting and diarrhea.'
    },
    ecological_information: {
        environmental_impact: 'Not expected to be harmful to aquatic organisms.'
    },
    disposal_considerations: {
        disposal_guidance: 'Dispose of contents/container in accordance with local/regional/national/international regulations.'
    },
    transport_information: {
        UN_no: 'UN1170',
        proper_shipping_name: 'ETHANOL',
        hazard_class: '3',
        packing_group: 'II'
    },
    regulatory_information: {
        details: 'Complies with OSHA Hazard Communication Standard.'
    },
    other_information: {
        information_date: '01-Jan-2022'
    }
});

db.chemicals.insertOne({
    substance_name: 'Formaldehyde',
    recommended_use: 'Used in household disinfectants and as a preservative.',
    supplier: {
        name: 'Fisher Scientific',
        address: '300 Industry Drive, Pittsburgh, PA 15275, USA',
        phone: '(800) 766-7000',
        emergency_phone: '1-800-424-9300 (CHEMTREC)'
    },
    hazard_identification: {
        hazards: 'Toxic if inhaled. Causes severe skin burns and eye damage. May cause cancer.'
    },
    composition_information: {
        component: 'Formaldehyde',
        cas_no: '50-00-0',
        weight: '37%'
    },
    first_aid_measures: {
        eye_contact: 'Rinse cautiously with water for several minutes. Remove contact lenses if present and easy to do. Continue rinsing.',
        skin_contact: 'Take off contaminated clothing. Rinse skin with water/shower.',
        inhalation: 'Remove person to fresh air and keep comfortable for breathing.',
        ingestion: 'Rinse mouth. Do NOT induce vomiting.',
        symptoms_effects: 'Burning sensation, coughing, wheezing, laryngitis, shortness of breath, headache, nausea.',
        notes_to_physician: 'Treat symptomatically.'
    },
    fire_fighting_measures: {
        extinguishing_media: 'Use water spray, alcohol-resistant foam, dry chemical or carbon dioxide.',
        special_instructions: 'Wear self-contained breathing apparatus for firefighting if necessary.'
    },
    accidental_release_measures: {
        personal_precautions: 'Evacuate personnel to safe areas. Ensure adequate ventilation.',
        environmental_precautions: 'Prevent further leakage or spillage if safe to do so.',
        cleanup_methods: 'Contain spillage, and then collect with non-combustible absorbent material.'
    },
    handling_and_storage: {
        handling: 'Avoid contact with skin and eyes. Avoid inhalation of vapor or mist.',
        storage: 'Keep container tightly closed in a dry and well-ventilated place.'
    },
    exposure_controls_personal_protection: {
        engineering_measures: 'Ensure adequate ventilation, especially in confined areas.',
        eye_face_protection: 'Tightly fitting safety goggles.',
        skin_body_protection: 'Protective gloves and clothing.',
        respiratory_protection: 'In case of insufficient ventilation, wear suitable respiratory equipment.',
        hygiene_measures: 'Handle in accordance with good industrial hygiene and safety practice.'
    },
    physical_and_chemical_properties: {
        appearance: 'Colorless liquid',
        odor: 'Pungent',
        pH: '3.0 – 4.0',
        solubility: 'Miscible with water',
        melting_point: '-15 °C',
        boiling_point: '96 °C'
    },
    stability_and_reactivity: {
        reactivity: 'No dangerous reaction known under conditions of normal use.',
        stability: 'Stable under recommended storage conditions.',
        conditions_to_avoid: 'Heat, flames and sparks.',
        incompatible_materials: 'Oxidizing agents, acids, alkali metals.',
        hazardous_decomposition_products: 'Carbon oxides.'
    },
    toxicological_information: {
        symptoms: 'May cause respiratory tract irritation. May cause allergic skin reaction.'
    },
    ecological_information: {
        environmental_impact: 'Toxic to aquatic life with long lasting effects.'
    },
    disposal_considerations: {
        disposal_guidance: 'Dispose of contents/container in accordance with local/regional/national/international regulations.'
    },
    transport_information: {
        UN_no: 'UN2209',
        proper_shipping_name: 'FORMALDEHYDE SOLUTION',
        hazard_class: '8',
        packing_group: 'III'
    },
    regulatory_information: {
        details: 'Classified as a known human carcinogen by IARC.'
    },
    other_information: {
        information_date: '01-Jan-2022'
    }
});

db.chemicals.insertOne({
    substance_name: 'Glycerin',
    recommended_use: 'Used in personal care products, soaps, and moisturizers.',
    supplier: {
        name: 'Essential Depot, Inc.',
        address: '4901 41st St W, Bradenton, FL 34210, USA',
        phone: '(866) 840-2495',
        emergency_phone: '1-800-255-3924 (CHEMTEL)'
    },
    hazard_identification: {
        hazards: 'Generally considered non-hazardous. May cause mild eye and skin irritation.'
    },
    composition_information: {
        component: 'Glycerin',
        cas_no: '56-81-5',
        weight: '>99%'
    },
    first_aid_measures: {
        eye_contact: 'Flush eyes with water for at least 15 minutes. Seek medical attention if irritation develops.',
        skin_contact: 'Wash with soap and water. Get medical attention if irritation develops.',
        inhalation: 'Move to fresh air. Get medical attention if symptoms occur.',
        ingestion: 'Rinse mouth. Seek medical advice if large quantities are ingested.',
        symptoms_effects: 'May cause mild irritation of eyes and respiratory tract.',
        notes_to_physician: 'Treat symptomatically.'
    },
    fire_fighting_measures: {
        extinguishing_media: 'Use water spray, dry chemical, carbon dioxide, or foam.',
        special_instructions: 'Avoid inhalation of combustion products.'
    },
    accidental_release_measures: {
        personal_precautions: 'Use protective equipment. Avoid contact with spilled material.',
        environmental_precautions: 'Prevent further leakage or spillage.',
        cleanup_methods: 'Soak up with inert absorbent material and dispose of in accordance with local regulations.'
    },
    handling_and_storage: {
        handling: 'Avoid contact with eyes and skin. Use in a well-ventilated area.',
        storage: 'Keep container tightly closed in a cool, dry, and well-ventilated place.'
    },
    exposure_controls_personal_protection: {
        engineering_measures: 'Use with adequate ventilation.',
        eye_face_protection: 'Safety glasses with side shields.',
        skin_body_protection: 'Protective gloves and standard lab clothing.',
        respiratory_protection: 'Not required under normal conditions.',
        hygiene_measures: 'Handle in accordance with good industrial hygiene and safety practice.'
    },
    physical_and_chemical_properties: {
        appearance: 'Colorless, odorless viscous liquid',
        odor: 'Odorless',
        pH: 'Neutral',
        solubility: 'Soluble in water',
        melting_point: '17.8 °C / 64 °F',
        boiling_point: '290 °C / 554 °F'
    },
    stability_and_reactivity: {
        reactivity: 'Stable under normal use.',
        stability: 'Stable under recommended storage conditions.',
        conditions_to_avoid: 'Extreme heat and incompatible substances.',
        incompatible_materials: 'Strong oxidizing agents, strong acids.'
    },
    toxicological_information: {
        symptoms: 'May cause mild irritation if inhaled or upon skin contact.'
    },
    ecological_information: {
        environmental_impact: 'Readily biodegradable. Not expected to be harmful to aquatic organisms.'
    },
    disposal_considerations: {
        disposal_guidance: 'Dispose in accordance with local, state, and federal regulations.'
    },
    transport_information: {
        UN_no: 'Not regulated',
        proper_shipping_name: 'Glycerin',
        hazard_class: 'Non-hazardous',
        packing_group: 'Not applicable'
    },
    regulatory_information: {
        details: 'Generally recognized as safe (GRAS) under FDA regulations.'
    },
    other_information: {
        information_date: '20-Nov-2022'
    }
});

db.chemicals.insertOne({
    substance_name: 'Hydrogen Peroxide',
    recommended_use: 'Used as a disinfectant and cleaning agent in households.',
    supplier: {
        name: 'Walgreens Co.',
        address: '200 Wilmot Rd, Deerfield, IL 60015',
        phone: '(847) 315-2500',
        emergency_phone: '1-800-222-1222 (Poison Control)'
    },
    hazard_identification: {
        hazards: 'Oxidizing agent. May cause eye and skin irritation. Harmful if swallowed.'
    },
    composition_information: {
        component: 'Hydrogen Peroxide',
        cas_no: '7722-84-1',
        weight: '3% (in aqueous solution)'
    },
    first_aid_measures: {
        eye_contact: 'Flush with water for at least 15 minutes. Seek medical attention.',
        skin_contact: 'Rinse with water. Remove contaminated clothing.',
        inhalation: 'Move to fresh air. Seek medical attention if symptoms occur.',
        ingestion: 'Do NOT induce vomiting. Rinse mouth. Call a poison center immediately.',
        symptoms_effects: 'May cause coughing, irritation, or gastrointestinal discomfort.',
        notes_to_physician: 'Treat symptomatically.'
    },
    fire_fighting_measures: {
        extinguishing_media: 'Use water spray. Do not use dry chemical or CO2.',
        special_instructions: 'Product may intensify fire due to oxidizing properties.'
    },
    accidental_release_measures: {
        personal_precautions: 'Wear appropriate PPE. Ensure adequate ventilation.',
        environmental_precautions: 'Avoid runoff into storm sewers and waterways.',
        cleanup_methods: 'Dilute with large amounts of water and mop up. Avoid incompatible materials.'
    },
    handling_and_storage: {
        handling: 'Avoid contact with eyes, skin, and clothing. Do not mix with other household chemicals.',
        storage: 'Store in original container, tightly closed, in a cool, dry place away from sunlight and heat.'
    },
    exposure_controls_personal_protection: {
        engineering_measures: 'Use in a well-ventilated area.',
        eye_face_protection: 'Safety goggles recommended.',
        skin_body_protection: 'Use gloves when handling in large quantities.',
        respiratory_protection: 'Not normally required.',
        hygiene_measures: 'Handle with good hygiene practices.'
    },
    physical_and_chemical_properties: {
        appearance: 'Colorless liquid',
        odor: 'Slightly sharp',
        pH: '4.5',
        solubility: 'Completely miscible in water',
        melting_point: '-0.43 °C / 31.2 °F',
        boiling_point: '108 °C / 226 °F'
    },
    stability_and_reactivity: {
        reactivity: 'Decomposes slowly to oxygen and water.',
        stability: 'Unstable when exposed to heat, light, or contaminants.',
        conditions_to_avoid: 'Heat, sunlight, metal ions, alkaline pH.',
        incompatible_materials: 'Metals, strong reducing agents, organic materials.'
    },
    toxicological_information: {
        symptoms: 'Irritation of eyes, skin, mucous membranes. Potential respiratory symptoms.'
    },
    ecological_information: {
        environmental_impact: 'Rapidly degrades in the environment. Low toxicity to aquatic life.'
    },
    disposal_considerations: {
        disposal_guidance: 'Dilute and flush with large amounts of water, or follow local guidelines for peroxide disposal.'
    },
    transport_information: {
        UN_no: 'UN2984',
        proper_shipping_name: 'Hydrogen Peroxide (aqueous solution, 3%)',
        hazard_class: '5.1 (Oxidizer)',
        packing_group: 'III'
    },
    regulatory_information: {
        details: 'Meets FDA, OSHA, and EPA requirements for over-the-counter antiseptics.'
    },
    other_information: {
        information_date: '02-Jan-2023'
    }
});

db.chemicals.insertOne({
    substance_name: 'Isopropyl Alcohol',
    recommended_use: 'Used as a disinfectant, antiseptic, and cleaning agent in households.',
    supplier: {
        name: 'Rite Aid Corporation',
        address: '30 Hunter Lane, Camp Hill, PA 17011, USA',
        phone: '(800) 748-3243',
        emergency_phone: '1-800-222-1222 (Poison Control)'
    },
    hazard_identification: {
        hazards: 'Highly flammable liquid and vapor. Causes serious eye irritation. May cause drowsiness or dizziness.'
    },
    composition_information: {
        component: 'Isopropyl Alcohol',
        cas_no: '67-63-0',
        weight: '>99%'
    },
    first_aid_measures: {
        eye_contact: 'Rinse cautiously with water for several minutes. Remove contact lenses if present and easy to do.',
        skin_contact: 'Wash with soap and water. Remove contaminated clothing.',
        inhalation: 'Move person to fresh air. Call a poison center if symptoms persist.',
        ingestion: 'Do not induce vomiting. Rinse mouth. Seek medical attention.',
        symptoms_effects: 'Dizziness, headache, nausea, possible unconsciousness at high concentrations.',
        notes_to_physician: 'Treat symptomatically.'
    },
    fire_fighting_measures: {
        extinguishing_media: 'Alcohol-resistant foam, dry chemical, CO₂.',
        special_instructions: 'Cool fire-exposed containers with water spray.'
    },
    accidental_release_measures: {
        personal_precautions: 'Use personal protective equipment. Remove all ignition sources.',
        environmental_precautions: 'Avoid discharge into drains.',
        cleanup_methods: 'Absorb with inert material and place in chemical waste container.'
    },
    handling_and_storage: {
        handling: 'Use non-sparking tools. Avoid contact with eyes. Keep away from heat and ignition sources.',
        storage: 'Store in a cool, well-ventilated area away from direct sunlight and incompatible materials.'
    },
    exposure_controls_personal_protection: {
        engineering_measures: 'Ensure good ventilation.',
        eye_face_protection: 'Chemical goggles or face shield.',
        skin_body_protection: 'Protective gloves and apron.',
        respiratory_protection: 'Use NIOSH-approved respirator if ventilation is inadequate.',
        hygiene_measures: 'Wash thoroughly after handling.'
    },
    physical_and_chemical_properties: {
        appearance: 'Colorless liquid',
        odor: 'Alcohol-like',
        pH: 'Neutral',
        solubility: 'Miscible with water',
        melting_point: '-89 °C / -128 °F',
        boiling_point: '82.6 °C / 180.7 °F'
    },
    stability_and_reactivity: {
        reactivity: 'Stable under recommended use.',
        stability: 'Stable under normal conditions.',
        conditions_to_avoid: 'Heat, sparks, open flame.',
        incompatible_materials: 'Strong oxidizers, acids, bases.'
    },
    toxicological_information: {
        symptoms: 'Irritation, headache, nausea, dizziness.'
    },
    ecological_information: {
        environmental_impact: 'Low environmental hazard in typical household concentrations.'
    },
    disposal_considerations: {
        disposal_guidance: 'Dispose according to local regulations for flammable solvents.'
    },
    transport_information: {
        UN_no: 'UN1219',
        proper_shipping_name: 'Isopropanol',
        hazard_class: '3',
        packing_group: 'II'
    },
    regulatory_information: {
        details: 'Listed under OSHA and FDA regulations for antiseptic use.'
    },
    other_information: {
        information_date: '14-Feb-2023'
    }
});

db.chemicals.insertOne({
    substance_name: 'Just Add Water Descaler',
    recommended_use: 'Used to remove limescale from kettles, coffee makers, and irons.',
    supplier: {
        name: 'Ecozone Ltd.',
        address: 'Unit 3, Argent Trade Park, London, N18 3HT, UK',
        phone: '+44 (0)20 8883 3777',
        emergency_phone: '+44 (0)870 190 6777 (UK Poison Centre)'
    },
    hazard_identification: {
        hazards: 'Irritating to eyes and skin. May cause mild gastrointestinal discomfort if swallowed.'
    },
    composition_information: {
        component: 'Citric Acid Monohydrate',
        cas_no: '5949-29-1',
        weight: '80-90%'
    },
    first_aid_measures: {
        eye_contact: 'Rinse with plenty of water for at least 10 minutes. Seek medical attention if irritation persists.',
        skin_contact: 'Wash skin with soap and water.',
        inhalation: 'Move to fresh air if dust is inhaled.',
        ingestion: 'Rinse mouth. Drink water to dilute. Do not induce vomiting.',
        symptoms_effects: 'Irritation, redness, sore throat.',
        notes_to_physician: 'Treat supportively.'
    },
    fire_fighting_measures: {
        extinguishing_media: 'Use media appropriate for surrounding fire.',
        special_instructions: 'Non-flammable. Cool nearby containers.'
    },
    accidental_release_measures: {
        personal_precautions: 'Avoid dust formation. Use PPE.',
        environmental_precautions: 'Do not release to waterways.',
        cleanup_methods: 'Sweep up and place in suitable container.'
    },
    handling_and_storage: {
        handling: 'Avoid dust generation. Handle with care.',
        storage: 'Store in a dry, cool, and well-ventilated place.'
    },
    exposure_controls_personal_protection: {
        engineering_measures: 'Avoid dust buildup.',
        eye_face_protection: 'Use safety goggles.',
        skin_body_protection: 'Use gloves.',
        respiratory_protection: 'Dust mask if needed.',
        hygiene_measures: 'Follow good hygiene practices.'
    },
    physical_and_chemical_properties: {
        appearance: 'White crystalline powder',
        odor: 'Odorless',
        pH: '2.2 (1% solution)',
        solubility: 'Soluble in water',
        melting_point: '153 °C / 307 °F',
        boiling_point: 'Decomposes before boiling'
    },
    stability_and_reactivity: {
        reactivity: 'Mild acid, reacts with bases and carbonates.',
        stability: 'Stable under normal conditions.',
        conditions_to_avoid: 'Moisture and heat.',
        incompatible_materials: 'Strong oxidizers, strong bases.'
    },
    toxicological_information: {
        symptoms: 'May cause eye and skin irritation.'
    },
    ecological_information: {
        environmental_impact: 'Biodegradable. Low toxicity to aquatic life.'
    },
    disposal_considerations: {
        disposal_guidance: 'Dispose as non-hazardous household waste unless local regulations require otherwise.'
    },
    transport_information: {
        UN_no: 'Not regulated',
        proper_shipping_name: 'Not applicable',
        hazard_class: 'Not applicable',
        packing_group: 'Not applicable'
    },
    regulatory_information: {
        details: 'Complies with EU and US household cleaning product safety standards.'
    },
    other_information: {
        information_date: '19-Jul-2022'
    }
});

db.chemicals.insertOne({
    substance_name: 'Kitchen Degreaser',
    recommended_use: 'Removes oil and grease from stovetops, ovens, and countertops.',
    supplier: {
        name: 'Zep Inc.',
        address: '1310 Seaboard Industrial Blvd NW, Atlanta, GA 30318',
        phone: '(404) 352-1680',
        emergency_phone: '1-877-541-2016'
    },
    hazard_identification: {
        hazards: 'Corrosive. Causes severe skin burns and eye damage.'
    },
    composition_information: {
        component: 'Sodium Metasilicate',
        cas_no: '6834-92-0',
        weight: '5-15%'
    },
    first_aid_measures: {
        eye_contact: 'Rinse cautiously with water for several minutes. Get immediate medical attention.',
        skin_contact: 'Remove contaminated clothing and wash skin thoroughly with water.',
        inhalation: 'Move person to fresh air. Get medical advice if symptoms develop.',
        ingestion: 'Rinse mouth. Do not induce vomiting. Seek medical attention.',
        symptoms_effects: 'Burning, redness, and irritation.',
        notes_to_physician: 'Treat with supportive care.'
    },
    fire_fighting_measures: {
        extinguishing_media: 'Non-combustible. Use media appropriate for surroundings.',
        special_instructions: 'Avoid runoff of contaminated water.'
    },
    accidental_release_measures: {
        personal_precautions: 'Wear chemical-resistant gloves and eye protection.',
        environmental_precautions: 'Avoid runoff into drains.',
        cleanup_methods: 'Neutralize with dilute acid. Collect for disposal.'
    },
    handling_and_storage: {
        handling: 'Avoid contact with skin, eyes, and clothing.',
        storage: 'Store tightly sealed in a cool, dry location.'
    },
    exposure_controls_personal_protection: {
        engineering_measures: 'Local exhaust ventilation recommended.',
        eye_face_protection: 'Chemical splash goggles.',
        skin_body_protection: 'Wear impervious gloves and apron.',
        respiratory_protection: 'Not needed with adequate ventilation.',
        hygiene_measures: 'Wash hands after use.'
    },
    physical_and_chemical_properties: {
        appearance: 'Clear or yellowish liquid',
        odor: 'Mild chemical odor',
        pH: '12–13',
        solubility: 'Soluble in water',
        melting_point: 'Unknown',
        boiling_point: '100 °C / 212 °F'
    },
    stability_and_reactivity: {
        reactivity: 'Reacts with acids to release heat.',
        stability: 'Stable under recommended conditions.',
        conditions_to_avoid: 'Mixing with acids.',
        incompatible_materials: 'Acids, aluminum.'
    },
    toxicological_information: {
        symptoms: 'Burns to mucous membranes, eyes, skin.'
    },
    ecological_information: {
        environmental_impact: 'High pH can harm aquatic life.'
    },
    disposal_considerations: {
        disposal_guidance: 'Neutralize and dispose of in accordance with local regulations.'
    },
    transport_information: {
        UN_no: 'UN1760',
        proper_shipping_name: 'Corrosive liquid, n.o.s. (Sodium Metasilicate)',
        hazard_class: '8',
        packing_group: 'II'
    },
    regulatory_information: {
        details: 'Meets US EPA and OSHA cleaning chemical guidelines.'
    },
    other_information: {
        information_date: '08-Dec-2023'
    }
});

db.chemicals.insertOne({
    substance_name: 'Lactic Acid',
    recommended_use: 'Used in natural cleaners, sanitizers, and descaling agents.',
    supplier: {
        name: 'Corbion NV',
        address: 'Arkelsedijk 46, 4206 AC Gorinchem, Netherlands',
        phone: '+31 183 695 695',
        emergency_phone: '+31 30 274 8888 (Dutch National Poison Centre)'
    },
    hazard_identification: {
        hazards: 'Irritating to eyes and skin. Not flammable.'
    },
    composition_information: {
        component: 'Lactic Acid',
        cas_no: '50-21-5',
        weight: '>85%'
    },
    first_aid_measures: {
        eye_contact: 'Flush eyes with plenty of water for at least 15 minutes.',
        skin_contact: 'Wash skin with soap and water.',
        inhalation: 'Remove to fresh air. Get medical attention if symptoms occur.',
        ingestion: 'Rinse mouth. Do not induce vomiting.',
        symptoms_effects: 'Redness, irritation, burning sensation.',
        notes_to_physician: 'Provide symptomatic treatment.'
    },
    fire_fighting_measures: {
        extinguishing_media: 'Water spray, foam, dry powder.',
        special_instructions: 'Product itself is not flammable.'
    },
    accidental_release_measures: {
        personal_precautions: 'Wear appropriate PPE. Avoid breathing vapors.',
        environmental_precautions: 'Do not allow to enter sewers or waterways.',
        cleanup_methods: 'Neutralize with lime or soda ash and absorb with inert material.'
    },
    handling_and_storage: {
        handling: 'Avoid inhalation and contact with skin or eyes.',
        storage: 'Keep container tightly closed in a cool, dry place.'
    },
    exposure_controls_personal_protection: {
        engineering_measures: 'Use with adequate ventilation.',
        eye_face_protection: 'Chemical goggles.',
        skin_body_protection: 'Wear protective gloves.',
        respiratory_protection: 'Use in well-ventilated area.',
        hygiene_measures: 'Wash hands thoroughly after handling.'
    },
    physical_and_chemical_properties: {
        appearance: 'Clear to slightly yellow liquid',
        odor: 'Slight acidic odor',
        pH: '<3',
        solubility: 'Soluble in water',
        melting_point: '18 °C / 64.4 °F',
        boiling_point: '122 °C / 252 °F'
    },
    stability_and_reactivity: {
        reactivity: 'Corrosive to some metals.',
        stability: 'Stable under normal conditions.',
        conditions_to_avoid: 'Heat, incompatible materials.',
        incompatible_materials: 'Strong bases, oxidizers.'
    },
    toxicological_information: {
        symptoms: 'Eye, skin, and mucous membrane irritation.'
    },
    ecological_information: {
        environmental_impact: 'Biodegradable, low risk to aquatic life.'
    },
    disposal_considerations: {
        disposal_guidance: 'Neutralize and dispose of according to local regulations.'
    },
    transport_information: {
        UN_no: 'Not regulated',
        proper_shipping_name: 'Not applicable',
        hazard_class: 'Not regulated',
        packing_group: 'Not applicable'
    },
    regulatory_information: {
        details: 'Compliant with FDA and EU food-safe sanitizer regulations.'
    },
    other_information: {
        information_date: '21-Sep-2022'
    }
});

db.chemicals.insertOne({
  substance_name: 'Muriatic Acid',
  recommended_use: 'Used for cleaning and etching concrete, adjusting pool pH levels, and removing rust stains.',
  supplier: {
    name: 'Klean-Strip',
    address: '101 Prospect Ave NW, Cleveland, OH 44115, USA',
    phone: '(800) 398-3892',
    emergency_phone: '1-800-424-9300 (CHEMTREC)'
  },
  hazard_identification: {
    hazards: 'Corrosive. Causes severe skin burns and eye damage. Harmful if inhaled.'
  },
  composition_information: {
    component: 'Hydrochloric Acid',
    cas_no: '7647-01-0',
    weight: '31.45%'
  },
  first_aid_measures: {
    eye_contact: 'Rinse cautiously with water for several minutes. Remove contact lenses if present and easy to do. Continue rinsing. Seek immediate medical attention.',
    skin_contact: 'Remove contaminated clothing. Rinse skin with water/shower. Seek medical attention.',
    inhalation: 'Remove person to fresh air and keep comfortable for breathing. Seek medical attention.',
    ingestion: 'Rinse mouth. Do NOT induce vomiting. Seek immediate medical attention.',
    symptoms_effects: 'Burning sensation, coughing, shortness of breath, nausea.',
    notes_to_physician: 'Treat symptomatically.'
  },
  fire_fighting_measures: {
    extinguishing_media: 'Use extinguishing measures that are appropriate to local circumstances and the surrounding environment.',
    special_instructions: 'Wear self-contained breathing apparatus for firefighting if necessary.'
  },
  accidental_release_measures: {
    personal_precautions: 'Evacuate personnel to safe areas. Ensure adequate ventilation. Use personal protective equipment.',
    environmental_precautions: 'Prevent further leakage or spillage if safe to do so. Do not let product enter drains.',
    cleanup_methods: 'Neutralize with soda ash or lime. Absorb with inert material and place in chemical waste container.'
  },
  handling_and_storage: {
    handling: 'Avoid contact with skin and eyes. Do not breathe vapors or mist. Use only in well-ventilated areas.',
    storage: 'Store in a cool, dry, well-ventilated area away from incompatible substances.'
  },
  exposure_controls_personal_protection: {
    engineering_measures: 'Ensure adequate ventilation, especially in confined areas.',
    eye_face_protection: 'Tightly fitting safety goggles.',
    skin_body_protection: 'Wear protective gloves and clothing.',
    respiratory_protection: 'In case of insufficient ventilation, wear suitable respiratory equipment.',
    hygiene_measures: 'Handle in accordance with good industrial hygiene and safety practice.'
  },
  physical_and_chemical_properties: {
    appearance: 'Colorless to light yellow liquid',
    odor: 'Pungent',
    pH: '<1',
    solubility: 'Miscible with water',
    melting_point: '-27.32 °C / -17.18 °F',
    boiling_point: '110 °C / 230 °F'
  },
  stability_and_reactivity: {
    reactivity: 'Reacts violently with bases and is corrosive to metals.',
    stability: 'Stable under recommended storage conditions.',
    conditions_to_avoid: 'Exposure to moisture and incompatible materials.',
    incompatible_materials: 'Strong bases, oxidizing agents, metals.'
  },
  toxicological_information: {
    symptoms: 'Burning sensation, coughing, wheezing, laryngitis, shortness of breath, headache, nausea, vomiting.',
    acute_effects: 'Corrosive to skin, eyes, and respiratory tract.'
  },
  ecological_information: {
    environmental_impact: 'Harmful to aquatic life due to low pH.'
  },
  disposal_considerations: {
    disposal_guidance: 'Neutralize with a suitable acid neutralizer and dispose of in accordance with local regulations.'
  },
  transport_information: {
    UN_no: 'UN1789',
    proper_shipping_name: 'Hydrochloric Acid',
    hazard_class: '8',
    packing_group: 'II'
  },
  regulatory_information: {
    details: 'Subject to reporting requirements under CERCLA and SARA Title III.'
  },
  other_information: {
    information_date: '15-May-2025'
  }
});

db.chemicals.insertOne({
  substance_name: 'Naphthalene',
  recommended_use: 'Used as a moth repellent and deodorizer.',
  supplier: {
    name: 'Old Fashioned Moth Balls',
    address: '1234 Main Street, Anytown, USA',
    phone: '(800) 555-1234',
    emergency_phone: '1-800-222-1222 (Poison Control)'
  },
  hazard_identification: {
    hazards: 'Flammable solid. Harmful if swallowed. Suspected of causing cancer.'
  },
  composition_information: {
    component: 'Naphthalene',
    cas_no: '91-20-3',
    weight: '99%'
  },
  first_aid_measures: {
    eye_contact: 'Rinse cautiously with water for several minutes. Remove contact lenses if present and easy to do. Continue rinsing.',
    skin_contact: 'Wash with soap and water. Remove contaminated clothing.',
    inhalation: 'Move to fresh air. Seek medical attention if symptoms occur.',
    ingestion: 'Do NOT induce vomiting. Rinse mouth. Seek immediate medical attention.',
    symptoms_effects: 'Headache, nausea, vomiting, abdominal pain.',
    notes_to_physician: 'Treat symptomatically.'
  },
  fire_fighting_measures: {
    extinguishing_media: 'Use water spray, alcohol-resistant foam, dry chemical or carbon dioxide.',
    special_instructions: 'Wear self-contained breathing apparatus for firefighting if necessary.'
  },
  accidental_release_measures: {
    personal_precautions: 'Avoid dust formation. Ensure adequate ventilation. Use personal protective equipment.',
    environmental_precautions: 'Prevent further leakage or spillage if safe to do so. Do not let product enter drains.',
    cleanup_methods: 'Sweep up and shovel. Keep in suitable, closed containers for disposal.'
  },
  handling_and_storage: {
    handling: 'Avoid contact with skin and eyes. Avoid formation of dust and aerosols. Provide appropriate exhaust ventilation.',
    storage: 'Store in a cool, dry, well-ventilated area away from incompatible substances.'
  },
  exposure_controls_personal_protection: {
    engineering_measures: 'Ensure adequate ventilation, especially in confined areas.',
    eye_face_protection: 'Safety glasses with side-shields.',
    skin_body_protection: 'Wear protective gloves and clothing.',
    respiratory_protection: 'In case of insufficient ventilation, wear suitable respiratory equipment.',
    hygiene_measures: 'Handle in accordance with good industrial hygiene and safety practice.'
  },
  physical_and_chemical_properties: {
    appearance: 'White crystalline solid',
    odor: 'Mothball-like',
    pH: 'Not applicable',
    solubility: 'Insoluble in water',
    melting_point: '80.2 °C / 176.4 °F',
    boiling_point: '218 °C / 424.4 °F'
  },
  stability_and_reactivity: {
    reactivity: 'Stable under recommended storage conditions.',
    stability: 'Stable under normal conditions.',
    conditions_to_avoid: 'Heat, flames, sparks.',
    incompatible_materials: 'Strong oxidizing agents.'
  },
  toxicological_information: {
    symptoms: 'Headache, nausea, vomiting, abdominal pain.',
    acute_effects: 'Harmful if swallowed. Suspected of causing cancer.'
  },
  ecological_information: {
    environmental_impact: 'Toxic to aquatic life with long-lasting effects.'
  },
  disposal_considerations: {
    disposal_guidance: 'Dispose of in accordance with local regulations.'
  },
  transport_information: {
    UN_no: 'UN1334',
    proper_shipping_name: 'Naphthalene, crude',
    hazard_class: '4.1',
    packing_group: 'III'
  },
  regulatory_information: {
    details: 'Listed as a hazardous substance under CERCLA and SARA Title III.'
  },
  other_information: {
    information_date: '15-May-2025'
  }
});

db.chemicals.insertOne({
  substance_name: 'Oven Cleaner',
  recommended_use: 'Used for cleaning baked-on grease and food residues from ovens.',
  supplier: {
    name: 'Easy-Off',
    address: '789 Cleaning Blvd, Clean City, USA',
    phone: '(800) 555-5678',
    emergency_phone: '1-800-222-1222 (Poison Control)'
  },
  hazard_identification: {
    hazards: 'Corrosive. Causes severe skin burns and eye damage.'
  },
  composition_information: {
    component: 'Sodium Hydroxide',
    cas_no: '1310-73-2',
    weight: '5%'
  },
  first_aid_measures: {
    eye_contact: 'Rinse cautiously with water for several minutes. Remove contact lenses if present and easy to do. Continue rinsing. Seek immediate medical attention.',
    skin_contact: 'Remove contaminated clothing. Rinse skin with water/shower. Seek medical attention.',
    inhalation: 'Remove person to fresh air and keep comfortable for breathing. Seek medical attention.',
    ingestion: 'Rinse mouth. Do NOT induce vomiting. Seek immediate medical attention.',
    symptoms_effects: 'Burning sensation, coughing, shortness of breath.',
    notes_to_physician: 'Treat symptomatically.'
  },
  fire_fighting_measures: {
    extinguishing_media: 'Use extinguishing measures that are appropriate to local circumstances and the surrounding environment.',
    special_instructions: 'Wear self-contained breathing apparatus for firefighting if necessary.'
  },
  accidental_release_measures: {
    personal_precautions: 'Evacuate personnel to safe areas. Ensure adequate ventilation. Use personal protective equipment.',
    environmental_precautions: 'Prevent further leakage or spillage if safe to do so. Do not let product enter drains.',
    cleanup_methods: 'Neutralize with a weak acid. Absorb with inert material and place in chemical waste container.'
  },
  handling_and_storage: {
    handling: 'Avoid contact with skin and eyes. Do not breathe vapors or mist. Use only in well-ventilated areas.',
    storage: 'Store in a cool, dry, well-ventilated area away from incompatible substances.'
  },
  exposure_controls_personal_protection: {
    engineering_measures: 'Ensure adequate ventilation, especially in confined areas.',
    eye_face_protection: 'Tightly fitting safety goggles.',
    skin_body_protection: 'Wear protective gloves and clothing.',
    respiratory_protection: 'In case of insufficient ventilation, wear suitable respiratory equipment.',
    hygiene_measures: 'Handle in accordance with good industrial hygiene and safety practice.'
  },
  physical_and_chemical_properties: {
    appearance: 'Clear or slightly cloudy liquid',
    odor: 'Pungent',
    pH: '>13',
    solubility: 'Soluble in water',
    melting_point: '<?>',
    boiling_point: '<?>'
  },
  stability_and_reactivity: {
    reactivity: 'Reacts violently with acids.',
    stability: 'Stable under normal conditions.',
    conditions_to_avoid: 'Exposure to acids, heat.',
    incompatible_materials: 'Acids, aluminum, organic materials.'
  },
  toxicological_information: {
    symptoms: 'Burns, tissue damage to eyes and skin, respiratory tract irritation.'
  },
  ecological_information: {
    environmental_impact: 'May increase pH of waterways and be harmful to aquatic organisms.'
  },
  disposal_considerations: {
    disposal_guidance: 'Neutralize and dispose in accordance with local, state, and federal regulations.'
  },
  transport_information: {
    UN_no: 'UN1824',
    proper_shipping_name: 'Sodium hydroxide solution',
    hazard_class: '8',
    packing_group: 'II'
  },
  regulatory_information: {
    details: 'Listed under various hazardous substances laws; check local regulations.'
  },
  other_information: {
    information_date: '15-May-2025'
  }
});

db.chemicals.insertOne({
  substance_name: 'Peroxide (Hydrogen Peroxide)',
  recommended_use: 'Used as a disinfectant and bleaching agent in households.',
  supplier: {
    name: 'Walgreens',
    address: '200 Wilmot Rd, Deerfield, IL 60015',
    phone: '(847) 315-2500',
    emergency_phone: '1-800-222-1222 (Poison Control)'
  },
  hazard_identification: {
    hazards: 'Causes serious eye damage. May cause skin irritation.'
  },
  composition_information: {
    component: 'Hydrogen Peroxide',
    cas_no: '7722-84-1',
    weight: '3%'
  },
  first_aid_measures: {
    eye_contact: 'Immediately flush eyes with plenty of water for at least 15 minutes. Get medical attention.',
    skin_contact: 'Wash off immediately with plenty of water. Seek medical attention if irritation persists.',
    inhalation: 'Move to fresh air. If symptoms persist, seek medical attention.',
    ingestion: 'Rinse mouth. Do not induce vomiting. Seek immediate medical attention.',
    symptoms_effects: 'Redness, burning sensation, irritation.',
    notes_to_physician: 'Treat symptomatically.'
  },
  fire_fighting_measures: {
    extinguishing_media: 'Water spray, alcohol-resistant foam, dry chemical, or carbon dioxide.',
    special_instructions: 'Wear self-contained breathing apparatus and full protective gear.'
  },
  accidental_release_measures: {
    personal_precautions: 'Ensure adequate ventilation. Wear protective equipment.',
    environmental_precautions: 'Do not allow product to enter drains.',
    cleanup_methods: 'Dilute with large amounts of water and mop up.'
  },
  handling_and_storage: {
    handling: 'Avoid contact with skin and eyes. Keep away from heat and sources of ignition.',
    storage: 'Store in a cool place. Keep container tightly closed in a dry and well-ventilated place.'
  },
  exposure_controls_personal_protection: {
    engineering_measures: 'Ensure good ventilation/exhaustion at the workplace.',
    eye_face_protection: 'Use safety glasses with side shields.',
    skin_body_protection: 'Wear suitable protective clothing and gloves.',
    respiratory_protection: 'Ensure adequate ventilation. Respiratory protection not required for normal use.',
    hygiene_measures: 'Handle in accordance with good industrial hygiene and safety practice.'
  },
  physical_and_chemical_properties: {
    appearance: 'Colorless liquid',
    odor: 'Odorless',
    pH: '~6',
    solubility: 'Soluble in water',
    melting_point: '-0.43 °C',
    boiling_point: '108 °C'
  },
  stability_and_reactivity: {
    reactivity: 'Strong oxidizer, reacts with combustible materials.',
    stability: 'Stable under recommended storage conditions.',
    conditions_to_avoid: 'Heat, flames, sparks.',
    incompatible_materials: 'Reducing agents, metals, acids.'
  },
  toxicological_information: {
    symptoms: 'May cause irritation to eyes, skin, and respiratory tract.'
  },
  ecological_information: {
    environmental_impact: 'Harmful to aquatic life in concentrated forms. Readily biodegradable.'
  },
  disposal_considerations: {
    disposal_guidance: 'Dispose of contents/container in accordance with local/regional/national regulations.'
  },
  transport_information: {
    UN_no: 'UN2984',
    proper_shipping_name: 'Hydrogen Peroxide (stabilized)',
    hazard_class: '5.1',
    packing_group: 'III'
  },
  regulatory_information: {
    details: 'Classified under oxidizing substances. Refer to applicable health and safety laws.'
  },
  other_information: {
    information_date: '15-May-2025'
  }
});

db.chemicals.insertOne({
  substance_name: 'Phenol (Disinfectant)',
  recommended_use: 'Used in household disinfectants and antiseptics.',
  supplier: {
    name: 'Lysol Brand (Reckitt)',
    address: 'Parsippany, NJ 07054-0224 USA',
    phone: '(800) 228-4722',
    emergency_phone: '1-800-222-1222 (Poison Control)'
  },
  hazard_identification: {
    hazards: 'Toxic if swallowed. Causes severe skin burns and eye damage. Harmful if inhaled.'
  },
  composition_information: {
    component: 'Phenol',
    cas_no: '108-95-2',
    weight: '1.5%'
  },
  first_aid_measures: {
    eye_contact: 'Rinse cautiously with water for several minutes. Remove contact lenses if present and easy to do. Continue rinsing. Seek medical attention.',
    skin_contact: 'Remove contaminated clothing and wash skin immediately with soap and water. Seek medical attention.',
    inhalation: 'Move to fresh air. Keep person warm and at rest. Get medical attention.',
    ingestion: 'Do not induce vomiting. Rinse mouth and drink plenty of water. Seek immediate medical attention.',
    symptoms_effects: 'Severe burns, nausea, vomiting, respiratory distress.',
    notes_to_physician: 'Treat symptomatically. Monitor for systemic toxicity including kidney/liver effects.'
  },
  fire_fighting_measures: {
    extinguishing_media: 'Use alcohol-resistant foam, dry chemical, or carbon dioxide.',
    special_instructions: 'Wear full protective gear and self-contained breathing apparatus.'
  },
  accidental_release_measures: {
    personal_precautions: 'Ensure adequate ventilation. Use personal protective equipment.',
    environmental_precautions: 'Prevent further leakage. Do not allow product to enter drains or waterways.',
    cleanup_methods: 'Absorb with inert material and dispose according to local regulations.'
  },
  handling_and_storage: {
    handling: 'Avoid breathing vapor or mist. Avoid contact with skin, eyes, and clothing.',
    storage: 'Store in a tightly closed container in a cool, dry, and well-ventilated area away from incompatible materials.'
  },
  exposure_controls_personal_protection: {
    engineering_measures: 'Ensure good ventilation. Provide local exhaust at points of emission.',
    eye_face_protection: 'Wear chemical splash goggles and face shield.',
    skin_body_protection: 'Wear chemical-resistant gloves and protective clothing.',
    respiratory_protection: 'If ventilation is inadequate, use NIOSH-approved respirator.',
    hygiene_measures: 'Wash hands thoroughly after handling. Do not eat, drink, or smoke when using this product.'
  },
  physical_and_chemical_properties: {
    appearance: 'Clear to light pink liquid',
    odor: 'Distinctive disinfectant odor',
    pH: '<?>',
    solubility: 'Soluble in water and alcohol',
    melting_point: '40.5 °C',
    boiling_point: '181.7 °C'
  },
  stability_and_reactivity: {
    reactivity: 'Reacts with strong oxidizers and acids.',
    stability: 'Stable under normal conditions.',
    conditions_to_avoid: 'Excess heat, flames, and sparks.',
    incompatible_materials: 'Strong oxidizing agents, acids, chlorinated compounds.'
  },
  toxicological_information: {
    symptoms: 'Burns, systemic toxicity including liver and kidney damage upon absorption.'
  },
  ecological_information: {
    environmental_impact: 'Toxic to aquatic life with long lasting effects.'
  },
  disposal_considerations: {
    disposal_guidance: 'Dispose of contents/container in accordance with local, regional, national regulations.'
  },
  transport_information: {
    UN_no: 'UN1671',
    proper_shipping_name: 'Phenol Solution',
    hazard_class: '6.1',
    packing_group: 'II'
  },
  regulatory_information: {
    details: 'Subject to reporting under TSCA and OSHA hazardous chemicals regulations.'
  },
  other_information: {
    information_date: '15-May-2025'
  }
});

db.chemicals.insertOne({
  substance_name: 'Quaternary Ammonium Disinfectant',
  recommended_use: 'Used for disinfecting surfaces in homes, especially kitchens and bathrooms.',
  supplier: {
    name: 'Clorox Company',
    address: '1221 Broadway, Oakland, CA 94612',
    phone: '(800) 227-1860',
    emergency_phone: '1-800-222-1222 (Poison Control)'
  },
  hazard_identification: {
    hazards: 'Causes moderate skin irritation. Harmful if swallowed or absorbed through skin. Avoid contact with eyes, skin, or clothing.'
  },
  composition_information: {
    component: 'Benzalkonium Chloride',
    cas_no: '8001-54-5',
    weight: '~0.1%'
  },
  first_aid_measures: {
    eye_contact: 'Hold eye open and rinse slowly and gently with water for 15–20 minutes. Remove contact lenses if present. Seek medical attention.',
    skin_contact: 'Take off contaminated clothing. Rinse skin immediately with plenty of water.',
    inhalation: 'Move to fresh air. If symptoms develop, seek medical advice.',
    ingestion: 'Do not induce vomiting. Rinse mouth. Get medical help or contact poison control.',
    symptoms_effects: 'Skin redness, eye irritation, possible respiratory symptoms with prolonged exposure.',
    notes_to_physician: 'Treat symptomatically.'
  },
  fire_fighting_measures: {
    extinguishing_media: 'Use water spray, dry chemical, carbon dioxide, or alcohol-resistant foam.',
    special_instructions: 'Wear self-contained breathing apparatus for firefighting if necessary.'
  },
  accidental_release_measures: {
    personal_precautions: 'Avoid contact with skin, eyes, and clothing. Ensure adequate ventilation.',
    environmental_precautions: 'Prevent further leakage or spillage if safe to do so. Do not let product enter drains or waterways.',
    cleanup_methods: 'Absorb with inert material. Place in chemical waste container for disposal.'
  },
  handling_and_storage: {
    handling: 'Avoid contact with skin, eyes, and clothing. Wash thoroughly after handling.',
    storage: 'Store in original container in a cool, dry, well-ventilated area. Do not reuse empty container.'
  },
  exposure_controls_personal_protection: {
    engineering_measures: 'Ensure good ventilation in the work area.',
    eye_face_protection: 'Safety glasses with side-shields.',
    skin_body_protection: 'Wear protective gloves and appropriate body protection.',
    respiratory_protection: 'Not required under normal use.',
    hygiene_measures: 'Wash hands before breaks and after handling the product.'
  },
  physical_and_chemical_properties: {
    appearance: 'Clear or slightly yellow liquid',
    odor: 'Mild or disinfectant-like',
    pH: '6–8',
    solubility: 'Soluble in water',
    melting_point: 'Unknown',
    boiling_point: 'Approximately 100 °C'
  },
  stability_and_reactivity: {
    reactivity: 'No dangerous reactions known under normal conditions.',
    stability: 'Stable under recommended storage conditions.',
    conditions_to_avoid: 'Extreme heat, direct sunlight.',
    incompatible_materials: 'Strong oxidizers, anionic surfactants.'
  },
  toxicological_information: {
    symptoms: 'Skin irritation, respiratory discomfort on prolonged exposure.'
  },
  ecological_information: {
    environmental_impact: 'Toxic to aquatic organisms with long-lasting effects.'
  },
  disposal_considerations: {
    disposal_guidance: 'Dispose in accordance with local, regional, and national regulations.'
  },
  transport_information: {
    UN_no: 'Not regulated',
    proper_shipping_name: 'Not applicable',
    hazard_class: 'N/A',
    packing_group: 'N/A'
  },
  regulatory_information: {
    details: 'Product is subject to EPA registration as a disinfectant. Follow all applicable local and federal laws.'
  },
  other_information: {
    information_date: '15-May-2025'
  }
});

db.chemicals.insertOne({
  substance_name: 'Rubbing Alcohol',
  recommended_use: 'Used as a disinfectant and antiseptic for household cleaning and first aid.',
  supplier: {
    name: 'CVS Health',
    address: '1 CVS Dr, Woonsocket, RI 02895',
    phone: '(800) 746-7287',
    emergency_phone: '1-800-222-1222 (Poison Control)'
  },
  hazard_identification: {
    hazards: 'Highly flammable liquid and vapor. Causes serious eye irritation. May cause drowsiness or dizziness.'
  },
  composition_information: {
    component: 'Isopropyl Alcohol',
    cas_no: '67-63-0',
    weight: '70%'
  },
  first_aid_measures: {
    eye_contact: 'Rinse thoroughly with plenty of water for at least 15 minutes and consult a physician.',
    skin_contact: 'Wash off with soap and plenty of water.',
    inhalation: 'If breathed in, move person into fresh air. If not breathing, give artificial respiration.',
    ingestion: 'Do not induce vomiting. Rinse mouth with water. Never give anything by mouth to an unconscious person.',
    symptoms_effects: 'May cause headache, dizziness, drowsiness, nausea, and central nervous system depression.',
    notes_to_physician: 'Treat symptomatically.'
  },
  fire_fighting_measures: {
    extinguishing_media: 'Use water spray, alcohol-resistant foam, dry chemical or carbon dioxide.',
    special_instructions: 'Wear self-contained breathing apparatus for firefighting if necessary.'
  },
  accidental_release_measures: {
    personal_precautions: 'Remove all sources of ignition. Ensure adequate ventilation. Use personal protective equipment.',
    environmental_precautions: 'Prevent further leakage or spillage if safe to do so. Do not let product enter drains.',
    cleanup_methods: 'Contain spillage, and then collect with an electrically protected vacuum cleaner or by wet-brushing and place in container for disposal.'
  },
  handling_and_storage: {
    handling: 'Avoid contact with skin and eyes. Keep away from sources of ignition — No smoking.',
    storage: 'Keep container tightly closed in a dry and well-ventilated place. Store in a flammable liquids cabinet.'
  },
  exposure_controls_personal_protection: {
    engineering_measures: 'Use explosion-proof equipment. Ensure adequate ventilation.',
    eye_face_protection: 'Safety glasses with side-shields.',
    skin_body_protection: 'Wear protective gloves and clothing.',
    respiratory_protection: 'Use respirators and components tested and approved under appropriate government standards if exposure limits are exceeded.',
    hygiene_measures: 'Handle in accordance with good industrial hygiene and safety practice.'
  },
  physical_and_chemical_properties: {
    appearance: 'Clear, colorless liquid',
    odor: 'Alcohol-like',
    pH: '7',
    solubility: 'Miscible with water',
    melting_point: '-89 °C',
    boiling_point: '82.6 °C'
  },
  stability_and_reactivity: {
    reactivity: 'No hazardous reactions under normal use conditions.',
    stability: 'Stable under recommended storage conditions.',
    conditions_to_avoid: 'Heat, flames, sparks.',
    incompatible_materials: 'Oxidizing agents, acid chlorides, acid anhydrides, halogenated compounds.'
  },
  toxicological_information: {
    symptoms: 'Headache, drowsiness, nausea, vomiting, central nervous system depression.'
  },
  ecological_information: {
    environmental_impact: 'Volatile and biodegradable. Low potential for bioaccumulation.'
  },
  disposal_considerations: {
    disposal_guidance: 'Dispose of contents/container to an approved waste disposal plant in accordance with local, regional, national, and international regulations.'
  },
  transport_information: {
    UN_no: 'UN1219',
    proper_shipping_name: 'ISOPROPANOL',
    hazard_class: '3',
    packing_group: 'II'
  },
  regulatory_information: {
    details: 'Complies with OSHA Hazard Communication Standard 29 CFR 1910.1200 and WHMIS.'
  },
  other_information: {
    information_date: '15-May-2025'
  }
});

db.chemicals.insertOne({
  substance_name: 'Sodium Bicarbonate',
  recommended_use: 'Used in baking, cleaning, deodorizing, and as an antacid.',
  supplier: {
    name: 'Arm & Hammer',
    address: '469 North Harrison Street, Princeton, NJ 08543',
    phone: '(800) 524-1328',
    emergency_phone: '1-800-424-9300 (CHEMTREC)'
  },
  hazard_identification: {
    hazards: 'Generally considered non-hazardous under normal usage. May cause minor irritation to eyes or respiratory tract in high concentrations.'
  },
  composition_information: {
    component: 'Sodium Bicarbonate',
    cas_no: '144-55-8',
    weight: '100%'
  },
  first_aid_measures: {
    eye_contact: 'Rinse thoroughly with plenty of water. Seek medical attention if irritation persists.',
    skin_contact: 'Wash with water. Get medical attention if irritation develops.',
    inhalation: 'Move to fresh air. Seek medical attention if symptoms persist.',
    ingestion: 'Rinse mouth. Do not induce vomiting. Seek medical attention if symptoms develop.',
    symptoms_effects: 'May cause eye or respiratory irritation in sensitive individuals.',
    notes_to_physician: 'Treat symptomatically.'
  },
  fire_fighting_measures: {
    extinguishing_media: 'Use extinguishing measures appropriate to local circumstances.',
    special_instructions: 'Product is non-flammable. No special fire-fighting procedures needed.'
  },
  accidental_release_measures: {
    personal_precautions: 'Avoid dust formation. Avoid breathing dust.',
    environmental_precautions: 'Avoid large releases into the environment.',
    cleanup_methods: 'Sweep up and shovel. Keep in suitable, closed containers for disposal.'
  },
  handling_and_storage: {
    handling: 'Avoid contact with eyes. Avoid breathing dust.',
    storage: 'Store in a cool, dry, and well-ventilated place.'
  },
  exposure_controls_personal_protection: {
    engineering_measures: 'Ensure adequate ventilation.',
    eye_face_protection: 'Wear safety glasses if dust is generated.',
    skin_body_protection: 'Wear protective gloves if prolonged contact is expected.',
    respiratory_protection: 'Use dust mask if exposure limits are exceeded.',
    hygiene_measures: 'Handle in accordance with good industrial hygiene and safety practice.'
  },
  physical_and_chemical_properties: {
    appearance: 'White crystalline powder',
    odor: 'Odorless',
    pH: '8.4 (1% solution)',
    solubility: 'Soluble in water',
    melting_point: '50 °C (decomposes)',
    boiling_point: 'Not applicable'
  },
  stability_and_reactivity: {
    reactivity: 'Stable under recommended storage conditions.',
    stability: 'Stable.',
    conditions_to_avoid: 'Avoid moisture.',
    incompatible_materials: 'Acids, aluminum, strong oxidizers.'
  },
  toxicological_information: {
    symptoms: 'Irritation to eyes, skin, or respiratory tract may occur in high doses.'
  },
  ecological_information: {
    environmental_impact: 'Expected to have low environmental impact. Biodegradable.'
  },
  disposal_considerations: {
    disposal_guidance: 'Dispose of in accordance with local regulations. Not classified as hazardous waste.'
  },
  transport_information: {
    UN_no: 'Not regulated',
    proper_shipping_name: 'Not regulated as a hazardous material',
    hazard_class: 'Not applicable',
    packing_group: 'Not applicable'
  },
  regulatory_information: {
    details: 'This substance is Generally Recognized As Safe (GRAS) by the FDA when used in food.'
  },
  other_information: {
    information_date: '15-May-2025'
  }
});

db.chemicals.insertOne({
  substance_name: 'Sodium Hypochlorite',
  recommended_use: 'Used as a household bleach and disinfectant.',
  supplier: {
    name: 'Clorox',
    address: '1221 Broadway, Oakland, CA 94612',
    phone: '(510) 271-7000',
    emergency_phone: '1-800-446-1014'
  },
  hazard_identification: {
    hazards: 'Causes severe skin burns and eye damage. Harmful if swallowed. Releases toxic gases upon contact with acids.'
  },
  composition_information: {
    component: 'Sodium Hypochlorite',
    cas_no: '7681-52-9',
    weight: '5-6%'
  },
  first_aid_measures: {
    eye_contact: 'Rinse cautiously with water for several minutes. Remove contact lenses if present and easy to do. Continue rinsing. Seek medical attention.',
    skin_contact: 'Wash with plenty of water. Remove contaminated clothing. Seek medical attention if irritation persists.',
    inhalation: 'Move to fresh air. If breathing is difficult, give oxygen. Seek medical attention.',
    ingestion: 'Rinse mouth. Do NOT induce vomiting. Seek immediate medical attention.',
    symptoms_effects: 'Burning sensation, redness, pain, coughing, shortness of breath.',
    notes_to_physician: 'Treat symptomatically.'
  },
  fire_fighting_measures: {
    extinguishing_media: 'Use water spray, foam, dry chemical or carbon dioxide.',
    special_instructions: 'Avoid mixing with acids and other chemicals to prevent toxic gas release.'
  },
  accidental_release_measures: {
    personal_precautions: 'Use protective equipment. Avoid breathing vapors. Ensure good ventilation.',
    environmental_precautions: 'Prevent entry into waterways, drains, or soil.',
    cleanup_methods: 'Dilute with plenty of water and mop up or absorb with inert material.'
  },
  handling_and_storage: {
    handling: 'Avoid contact with skin and eyes. Use only in well-ventilated areas.',
    storage: 'Store in a cool, dry, well-ventilated place away from incompatible materials.'
  },
  exposure_controls_personal_protection: {
    engineering_measures: 'Provide adequate ventilation.',
    eye_face_protection: 'Wear chemical safety goggles.',
    skin_body_protection: 'Wear suitable protective clothing and gloves.',
    respiratory_protection: 'Use appropriate respiratory protection if ventilation is inadequate.',
    hygiene_measures: 'Wash hands after handling.'
  },
  physical_and_chemical_properties: {
    appearance: 'Pale greenish-yellow liquid',
    odor: 'Chlorine-like odor',
    pH: '11-13',
    solubility: 'Miscible with water',
    melting_point: '-6 °C',
    boiling_point: 'Not applicable (decomposes)'
  },
  stability_and_reactivity: {
    reactivity: 'Reacts violently with acids and organic materials.',
    stability: 'Stable under recommended storage conditions.',
    conditions_to_avoid: 'Heat, sunlight, acids, combustible materials.',
    incompatible_materials: 'Acids, ammonia, metals, organic materials.'
  },
  toxicological_information: {
    symptoms: 'Irritation to eyes, skin, respiratory tract; nausea; coughing.'
  },
  ecological_information: {
    environmental_impact: 'Toxic to aquatic life. Avoid release into the environment.'
  },
  disposal_considerations: {
    disposal_guidance: 'Dispose in accordance with local, regional, national regulations.'
  },
  transport_information: {
    UN_no: 'UN1791',
    proper_shipping_name: 'HYPOCHLORITE SOLUTION',
    hazard_class: '8',
    packing_group: 'III'
  },
  regulatory_information: {
    details: 'Regulated under OSHA, WHMIS, and local environmental regulations.'
  },
  other_information: {
    information_date: '15-May-2025'
  }
});

db.chemicals.insertOne({
  substance_name: 'Sugar',
  recommended_use: 'Common household sweetener used in food preparation and baking.',
  supplier: {
    name: 'Domino Sugar',
    address: '2100 S 26th St, Baltimore, MD 21225',
    phone: '(800) 343-8324',
    emergency_phone: '1-800-222-1222 (Poison Control)'
  },
  hazard_identification: {
    hazards: 'Generally recognized as safe. Dust may form explosive mixtures in air.'
  },
  composition_information: {
    component: 'Sucrose',
    cas_no: '57-50-1',
    weight: '100%'
  },
  first_aid_measures: {
    eye_contact: 'Flush eyes with water if irritation occurs.',
    skin_contact: 'Wash skin with soap and water.',
    inhalation: 'Move to fresh air if dust inhaled and irritation occurs.',
    ingestion: 'Not hazardous. Excessive consumption may cause digestive discomfort.',
    symptoms_effects: 'None under normal use.',
    notes_to_physician: 'Not applicable.'
  },
  fire_fighting_measures: {
    extinguishing_media: 'Water spray, foam, dry chemical.',
    special_instructions: 'Dust can be explosive; use caution.'
  },
  accidental_release_measures: {
    personal_precautions: 'Avoid dust formation. Use appropriate protective equipment.',
    environmental_precautions: 'Prevent large quantities from entering drains.',
    cleanup_methods: 'Sweep up and dispose of in appropriate containers.'
  },
  handling_and_storage: {
    handling: 'Avoid dust formation. Handle in well-ventilated areas.',
    storage: 'Store in a cool, dry place away from incompatible materials.'
  },
  exposure_controls_personal_protection: {
    engineering_measures: 'Use local exhaust ventilation to control dust.',
    eye_face_protection: 'Wear safety glasses if dust exposure is possible.',
    skin_body_protection: 'Wear gloves if handling large quantities.',
    respiratory_protection: 'Use dust mask if dust generation is high.',
    hygiene_measures: 'Wash hands after handling.'
  },
  physical_and_chemical_properties: {
    appearance: 'White crystalline powder',
    odor: 'Odorless',
    pH: 'Not applicable',
    solubility: 'Soluble in water',
    melting_point: '186 °C',
    boiling_point: 'Decomposes before boiling'
  },
  stability_and_reactivity: {
    reactivity: 'Stable under normal conditions.',
    stability: 'Stable under recommended storage conditions.',
    conditions_to_avoid: 'Avoid moisture and dust accumulation.',
    incompatible_materials: 'Strong oxidizers.'
  },
  toxicological_information: {
    symptoms: 'None known under normal use.'
  },
  ecological_information: {
    environmental_impact: 'Biodegradable and non-toxic to aquatic life.'
  },
  disposal_considerations: {
    disposal_guidance: 'Dispose in accordance with local regulations.'
  },
  transport_information: {
    UN_no: '',
    proper_shipping_name: 'Not regulated',
    hazard_class: '',
    packing_group: ''
  },
  regulatory_information: {
    details: 'Generally recognized as safe (GRAS) by FDA.'
  },
  other_information: {
    information_date: '15-May-2025'
  }
});

// T - Toluene
db.chemicals.insertOne({
  substance_name: 'Toluene',
  recommended_use: 'Used as a solvent in paints, coatings, adhesives, and household products.',
  supplier: {
    name: 'Sigma-Aldrich',
    address: '3050 Spruce St, St. Louis, MO 63103',
    phone: '(800) 325-3010',
    emergency_phone: '1-800-424-9300 (CHEMTREC)'
  },
  hazard_identification: {
    hazards: 'Flammable liquid and vapor. Causes skin irritation. May cause drowsiness or dizziness. Harmful if inhaled.'
  },
  composition_information: {
    component: 'Toluene',
    cas_no: '108-88-3',
    weight: '>99%'
  },
  first_aid_measures: {
    eye_contact: 'Rinse cautiously with water for several minutes. Remove contact lenses if present and easy to do. Continue rinsing. Seek medical attention if irritation persists.',
    skin_contact: 'Wash with plenty of soap and water. Remove contaminated clothing. Seek medical attention if irritation occurs.',
    inhalation: 'Move to fresh air. If breathing is difficult, give oxygen. Seek medical attention if symptoms persist.',
    ingestion: 'Do not induce vomiting. Rinse mouth. Seek medical attention immediately.',
    symptoms_effects: 'Headache, dizziness, nausea, fatigue, central nervous system depression.',
    notes_to_physician: 'Treat symptomatically.'
  },
  fire_fighting_measures: {
    extinguishing_media: 'Use foam, dry chemical, or carbon dioxide.',
    special_instructions: 'Use water spray to cool containers exposed to fire.'
  },
  accidental_release_measures: {
    personal_precautions: 'Avoid breathing vapors. Remove ignition sources. Use protective equipment.',
    environmental_precautions: 'Prevent entry into waterways, drains, or soil.',
    cleanup_methods: 'Contain spill, absorb with inert material, and dispose of properly.'
  },
  handling_and_storage: {
    handling: 'Avoid contact with skin and eyes. Use only in well-ventilated areas.',
    storage: 'Store in a cool, dry, well-ventilated place away from ignition sources.'
  },
  exposure_controls_personal_protection: {
    engineering_measures: 'Use local exhaust ventilation.',
    eye_face_protection: 'Wear safety goggles.',
    skin_body_protection: 'Wear protective gloves and clothing.',
    respiratory_protection: 'Use NIOSH-approved respirator if exposure limits are exceeded.',
    hygiene_measures: 'Wash hands thoroughly after handling.'
  },
  physical_and_chemical_properties: {
    appearance: 'Colorless liquid',
    odor: 'Sweet, aromatic',
    pH: 'Not applicable',
    solubility: 'Slightly soluble in water',
    melting_point: '-95 °C',
    boiling_point: '110.6 °C'
  },
  stability_and_reactivity: {
    reactivity: 'No hazardous reactions known.',
    stability: 'Stable under normal conditions.',
    conditions_to_avoid: 'Heat, sparks, open flames.',
    incompatible_materials: 'Strong oxidizing agents, acids, halogens.'
  },
  toxicological_information: {
    symptoms: 'Headache, dizziness, nausea, irritation of eyes, skin, respiratory tract.'
  },
  ecological_information: {
    environmental_impact: 'Toxic to aquatic life. Avoid release into the environment.'
  },
  disposal_considerations: {
    disposal_guidance: 'Dispose according to local regulations.'
  },
  transport_information: {
    UN_no: 'UN1294',
    proper_shipping_name: 'TOLUENE',
    hazard_class: '3',
    packing_group: 'II'
  },
  regulatory_information: {
    details: 'Subject to OSHA and EPA regulations.'
  },
  other_information: {
    information_date: '15-May-2025'
  }
});

// T - Table Salt (Sodium Chloride)
db.chemicals.insertOne({
  substance_name: 'Table Salt',
  recommended_use: 'Common household seasoning and preservative.',
  supplier: {
    name: 'Morton Salt',
    address: '123 N Wacker Dr, Chicago, IL 60606',
    phone: '(312) 876-5000',
    emergency_phone: '1-800-222-1222 (Poison Control)'
  },
  hazard_identification: {
    hazards: 'Generally regarded as safe. May cause irritation if inhaled as dust.'
  },
  composition_information: {
    component: 'Sodium Chloride',
    cas_no: '7647-14-5',
    weight: '100%'
  },
  first_aid_measures: {
    eye_contact: 'Rinse with plenty of water.',
    skin_contact: 'Wash with soap and water.',
    inhalation: 'Move to fresh air if irritation occurs.',
    ingestion: 'Not hazardous under normal conditions.',
    symptoms_effects: 'May cause mild irritation.',
    notes_to_physician: 'Not applicable.'
  },
  fire_fighting_measures: {
    extinguishing_media: 'Not combustible.',
    special_instructions: 'Use extinguishing media suitable for surrounding fire.'
  },
  accidental_release_measures: {
    personal_precautions: 'Avoid dust formation.',
    environmental_precautions: 'Prevent entry into waterways.',
    cleanup_methods: 'Sweep up and dispose.'
  },
  handling_and_storage: {
    handling: 'Avoid dust formation.',
    storage: 'Store in a dry place.'
  },
  exposure_controls_personal_protection: {
    engineering_measures: 'Use ventilation to minimize dust.',
    eye_face_protection: 'Not normally required.',
    skin_body_protection: 'Not normally required.',
    respiratory_protection: 'Use dust mask if necessary.',
    hygiene_measures: 'Wash hands after use.'
  },
  physical_and_chemical_properties: {
    appearance: 'White crystalline solid',
    odor: 'Odorless',
    pH: '7',
    solubility: 'Soluble in water',
    melting_point: '801 °C',
    boiling_point: '1413 °C'
  },
  stability_and_reactivity: {
    reactivity: 'Stable.',
    stability: 'Stable.',
    conditions_to_avoid: 'None known.',
    incompatible_materials: 'Strong acids, strong bases.',
  },
  toxicological_information: {
    symptoms: 'None under normal use.'
  },
  ecological_information: {
    environmental_impact: 'Non-toxic to aquatic life.'
  },
  disposal_considerations: {
    disposal_guidance: 'Dispose according to local regulations.'
  },
  transport_information: {
    UN_no: '',
    proper_shipping_name: 'Not regulated',
    hazard_class: '',
    packing_group: ''
  },
  regulatory_information: {
    details: 'Generally recognized as safe (GRAS).'
  },
  other_information: {
    information_date: '15-May-2025'
  }
});

// T - Turpentine
db.chemicals.insertOne({
  substance_name: 'Turpentine',
  recommended_use: 'Used as a solvent and paint thinner in households.',
  supplier: {
    name: 'Sherwin-Williams',
    address: '101 W Prospect Ave, Cleveland, OH 44115',
    phone: '(216) 566-2000',
    emergency_phone: '1-800-424-9300 (CHEMTREC)'
  },
  hazard_identification: {
    hazards: 'Highly flammable liquid and vapor. Causes skin irritation. May cause respiratory irritation and drowsiness.'
  },
  composition_information: {
    component: 'Turpentine',
    cas_no: '8006-64-2',
    weight: '>90%'
  },
  first_aid_measures: {
    eye_contact: 'Rinse cautiously with water for several minutes. Remove contact lenses if present. Seek medical attention if irritation persists.',
    skin_contact: 'Wash with plenty of soap and water. Remove contaminated clothing. Seek medical advice if irritation occurs.',
    inhalation: 'Move person to fresh air. Give oxygen if breathing is difficult. Seek medical advice if symptoms persist.',
    ingestion: 'Do not induce vomiting. Rinse mouth and seek medical attention immediately.',
    symptoms_effects: 'Headache, dizziness, nausea, irritation of eyes, skin, and respiratory system.',
    notes_to_physician: 'Treat symptomatically.'
  },
  fire_fighting_measures: {
    extinguishing_media: 'Use foam, dry chemical, or carbon dioxide.',
    special_instructions: 'Use water spray to cool containers exposed to heat.'
  },
  accidental_release_measures: {
    personal_precautions: 'Remove ignition sources. Use protective equipment and ensure ventilation.',
    environmental_precautions: 'Prevent entry into drains and waterways.',
    cleanup_methods: 'Contain spill and absorb with inert material.'
  },
  handling_and_storage: {
    handling: 'Avoid contact with skin and eyes. Use only in well-ventilated areas.',
    storage: 'Store in a cool, dry, well-ventilated place away from ignition sources.'
  },
  exposure_controls_personal_protection: {
    engineering_measures: 'Use local exhaust ventilation.',
    eye_face_protection: 'Wear safety goggles.',
    skin_body_protection: 'Wear protective gloves and clothing.',
    respiratory_protection: 'Use NIOSH-approved respirator if exposure limits are exceeded.',
    hygiene_measures: 'Wash hands after handling.'
  },
  physical_and_chemical_properties: {
    appearance: 'Colorless to pale yellow liquid',
    odor: 'Pine-like odor',
    pH: 'Not applicable',
    solubility: 'Slightly soluble in water',
    melting_point: '-50 °C',
    boiling_point: '155-185 °C'
  },
  stability_and_reactivity: {
    reactivity: 'No known hazardous reactions.',
    stability: 'Stable under recommended storage conditions.',
    conditions_to_avoid: 'Heat, sparks, flames.',
    incompatible_materials: 'Strong oxidizers, acids.'
  },
  toxicological_information: {
    symptoms: 'Irritation of eyes, skin, respiratory tract; dizziness; headache.'
  },
  ecological_information: {
    environmental_impact: 'Toxic to aquatic life. Avoid release into environment.'
  },
  disposal_considerations: {
    disposal_guidance: 'Dispose according to local regulations.'
  },
  transport_information: {
    UN_no: 'UN1299',
    proper_shipping_name: 'TURPENTINE',
    hazard_class: '3',
    packing_group: 'II'
  },
  regulatory_information: {
    details: 'Subject to OSHA and EPA regulations.'
  },
  other_information: {
    information_date: '15-May-2025'
  }
});

db.chemicals.insertOne({
  substance_name: 'Urea',
  recommended_use: 'Used in fertilizers, household cleaning products, and as a protein supplement in animal feed.',
  supplier: {
    name: 'Brenntag North America',
    address: '455 W Forest Hill Ave, Oak Creek, WI 53154',
    phone: '(414) 908-6900',
    emergency_phone: '1-800-424-9300 (CHEMTREC)'
  },
  hazard_identification: {
    hazards: 'May cause irritation to eyes, skin, and respiratory tract. Not classified as hazardous under normal conditions.'
  },
  composition_information: {
    component: 'Urea',
    cas_no: '57-13-6',
    weight: '100%'
  },
  first_aid_measures: {
    eye_contact: 'Rinse cautiously with water for several minutes. Remove contact lenses if present. Seek medical attention if irritation persists.',
    skin_contact: 'Wash with soap and water. Seek medical attention if irritation develops.',
    inhalation: 'Move to fresh air. Seek medical advice if symptoms occur.',
    ingestion: 'Rinse mouth. Seek medical attention if large quantities are ingested.',
    symptoms_effects: 'May cause mild irritation to eyes, skin, and respiratory system.',
    notes_to_physician: 'Treat symptomatically.'
  },
  fire_fighting_measures: {
    extinguishing_media: 'Use water spray, foam, dry chemical, or carbon dioxide.',
    special_instructions: 'Product is not flammable but may decompose under fire conditions releasing toxic fumes.'
  },
  accidental_release_measures: {
    personal_precautions: 'Avoid dust formation. Use protective equipment.',
    environmental_precautions: 'Prevent entry into waterways.',
    cleanup_methods: 'Sweep up and dispose of properly.'
  },
  handling_and_storage: {
    handling: 'Avoid creating dust. Use in well-ventilated areas.',
    storage: 'Store in a cool, dry, well-ventilated place.'
  },
  exposure_controls_personal_protection: {
    engineering_measures: 'Use local exhaust ventilation.',
    eye_face_protection: 'Safety glasses.',
    skin_body_protection: 'Protective gloves if needed.',
    respiratory_protection: 'Dust mask if dust exposure is excessive.',
    hygiene_measures: 'Wash hands after handling.'
  },
  physical_and_chemical_properties: {
    appearance: 'White crystalline solid',
    odor: 'Odorless',
    pH: '7',
    solubility: 'Soluble in water',
    melting_point: '132.7 °C',
    boiling_point: 'Decomposes before boiling'
  },
  stability_and_reactivity: {
    reactivity: 'Stable under recommended storage conditions.',
    stability: 'Stable.',
    conditions_to_avoid: 'Strong acids, strong oxidizers.',
    incompatible_materials: 'Strong oxidizing agents.'
  },
  toxicological_information: {
    symptoms: 'Mild irritation of eyes, skin, and respiratory tract.'
  },
  ecological_information: {
    environmental_impact: 'Low toxicity to aquatic life.'
  },
  disposal_considerations: {
    disposal_guidance: 'Dispose according to local regulations.'
  },
  transport_information: {
    UN_no: 'UN3077',
    proper_shipping_name: 'ENVIRONMENTALLY HAZARDOUS SUBSTANCE, SOLID, N.O.S. (Urea)',
    hazard_class: '9',
    packing_group: 'III'
  },
  regulatory_information: {
    details: 'Complies with OSHA standards.'
  },
  other_information: {
    information_date: '15-May-2025'
  }
});

db.chemicals.insertOne({
  substance_name: 'Unscented Bleach',
  recommended_use: 'Household disinfectant and cleaner.',
  supplier: {
    name: 'Clorox',
    address: '1221 Broadway, Oakland, CA 94612',
    phone: '(510) 271-7000',
    emergency_phone: '1-800-255-3924 (Poison Control)'
  },
  hazard_identification: {
    hazards: 'Corrosive. Causes severe skin burns and eye damage. Harmful if inhaled or swallowed.'
  },
  composition_information: {
    component: 'Sodium Hypochlorite',
    cas_no: '7681-52-9',
    weight: '5-6%'
  },
  first_aid_measures: {
    eye_contact: 'Rinse cautiously with water for several minutes. Remove contact lenses if present. Seek immediate medical attention.',
    skin_contact: 'Remove contaminated clothing. Rinse skin with water for at least 15 minutes. Seek medical attention.',
    inhalation: 'Move to fresh air. Seek medical attention if symptoms persist.',
    ingestion: 'Do not induce vomiting. Rinse mouth. Seek immediate medical attention.',
    symptoms_effects: 'Severe irritation, burns, coughing, difficulty breathing.',
    notes_to_physician: 'Treat symptomatically.'
  },
  fire_fighting_measures: {
    extinguishing_media: 'Use water spray, foam, dry chemical, or carbon dioxide.',
    special_instructions: 'Decomposes on heating releasing toxic gases.'
  },
  accidental_release_measures: {
    personal_precautions: 'Wear protective gloves, clothing, and eye protection. Ensure adequate ventilation.',
    environmental_precautions: 'Prevent entry into waterways, drains, or soil.',
    cleanup_methods: 'Absorb with inert material and dispose properly.'
  },
  handling_and_storage: {
    handling: 'Avoid contact with skin, eyes, and clothing. Use only in well-ventilated areas.',
    storage: 'Store in a cool, dry, well-ventilated place away from acids and organic materials.'
  },
  exposure_controls_personal_protection: {
    engineering_measures: 'Use ventilation to minimize exposure.',
    eye_face_protection: 'Chemical safety goggles.',
    skin_body_protection: 'Protective gloves and clothing.',
    respiratory_protection: 'Use NIOSH-approved respirator if exposure limits are exceeded.',
    hygiene_measures: 'Wash thoroughly after handling.'
  },
  physical_and_chemical_properties: {
    appearance: 'Clear, pale yellow liquid',
    odor: 'Chlorine-like',
    pH: '11-13',
    solubility: 'Miscible with water',
    melting_point: 'Not applicable',
    boiling_point: 'Approx. 100 °C'
  },
  stability_and_reactivity: {
    reactivity: 'Reacts violently with acids and organic materials.',
    stability: 'Stable under recommended storage conditions.',
    conditions_to_avoid: 'Heat, sunlight, contamination.',
    incompatible_materials: 'Acids, ammonia, organic materials.'
  },
  toxicological_information: {
    symptoms: 'Irritation and burns to skin, eyes, respiratory tract.'
  },
  ecological_information: {
    environmental_impact: 'Toxic to aquatic organisms.'
  },
  disposal_considerations: {
    disposal_guidance: 'Dispose in accordance with local regulations.'
  },
  transport_information: {
    UN_no: 'UN1791',
    proper_shipping_name: 'HYPOCHLORITE SOLUTION',
    hazard_class: '8',
    packing_group: 'III'
  },
  regulatory_information: {
    details: 'Complies with OSHA and EPA regulations.'
  },
  other_information: {
    information_date: '15-May-2025'
  }
});

db.chemicals.insertOne({
  substance_name: 'Vinegar',
  recommended_use: 'Household cleaning, cooking, and food preservation.',
  supplier: {
    name: 'Heinz',
    address: 'Pittsburgh, PA 15222',
    phone: '(412) 237-5600',
    emergency_phone: '1-800-255-3924 (Poison Control)'
  },
  hazard_identification: {
    hazards: 'May cause mild skin and eye irritation. Avoid prolonged exposure.'
  },
  composition_information: {
    component: 'Acetic Acid',
    cas_no: '64-19-7',
    weight: '4-8%'
  },
  first_aid_measures: {
    eye_contact: 'Rinse immediately with plenty of water for at least 15 minutes. Seek medical attention if irritation persists.',
    skin_contact: 'Wash off immediately with plenty of water. Seek medical attention if irritation develops.',
    inhalation: 'Move to fresh air. Seek medical attention if symptoms persist.',
    ingestion: 'Rinse mouth. Seek medical attention if large amounts are ingested.',
    symptoms_effects: 'Mild irritation of eyes and skin.',
    notes_to_physician: 'Treat symptomatically.'
  },
  fire_fighting_measures: {
    extinguishing_media: 'Use water spray, foam, dry chemical or carbon dioxide.',
    special_instructions: 'Non-flammable, but may release irritating fumes if heated.'
  },
  accidental_release_measures: {
    personal_precautions: 'Avoid contact with skin and eyes. Use protective equipment.',
    environmental_precautions: 'Prevent release to the environment.',
    cleanup_methods: 'Absorb with inert material and dispose properly.'
  },
  handling_and_storage: {
    handling: 'Use in well-ventilated areas. Avoid prolonged skin contact.',
    storage: 'Store in a cool, dry place away from strong oxidizers.'
  },
  exposure_controls_personal_protection: {
    engineering_measures: 'Ensure adequate ventilation.',
    eye_face_protection: 'Safety glasses.',
    skin_body_protection: 'Protective gloves if prolonged contact.',
    respiratory_protection: 'Not normally required.',
    hygiene_measures: 'Wash hands after use.'
  },
  physical_and_chemical_properties: {
    appearance: 'Clear liquid',
    odor: 'Sharp, vinegar odor',
    pH: '2-3',
    solubility: 'Miscible with water',
    melting_point: 'Approximately 0 °C',
    boiling_point: '100 °C'
  },
  stability_and_reactivity: {
    reactivity: 'Stable under normal conditions.',
    stability: 'Stable.',
    conditions_to_avoid: 'Strong oxidizing agents.',
    incompatible_materials: 'Strong bases, oxidizers.'
  },
  toxicological_information: {
    symptoms: 'Mild irritation of skin, eyes, and respiratory tract.'
  },
  ecological_information: {
    environmental_impact: 'Biodegradable and low toxicity.'
  },
  disposal_considerations: {
    disposal_guidance: 'Dispose in accordance with local regulations.'
  },
  transport_information: {
    UN_no: 'Not regulated',
    proper_shipping_name: 'Not regulated',
    hazard_class: '',
    packing_group: ''
  },
  regulatory_information: {
    details: 'Generally recognized as safe for household use.'
  },
  other_information: {
    information_date: '15-May-2025'
  }
});

db.chemicals.insertOne({
  substance_name: 'Vegetable Oil',
  recommended_use: 'Cooking and food preparation.',
  supplier: {
    name: 'Cargill',
    address: '15407 McGinty Rd W, Wayzata, MN 55391',
    phone: '(952) 742-7575',
    emergency_phone: '1-800-424-9300 (CHEMTREC)'
  },
  hazard_identification: {
    hazards: 'Not hazardous under normal use. Can cause slipping hazard if spilled.'
  },
  composition_information: {
    component: 'Canola Oil',
    cas_no: '8001-27-6',
    weight: '100%'
  },
  first_aid_measures: {
    eye_contact: 'Rinse with water if oil gets into eyes.',
    skin_contact: 'Wash with soap and water.',
    inhalation: 'Not applicable under normal conditions.',
    ingestion: 'Generally safe. If large amounts ingested, consult physician.',
    symptoms_effects: 'None expected.',
    notes_to_physician: 'No specific treatment necessary.'
  },
  fire_fighting_measures: {
    extinguishing_media: 'Use dry chemical, foam, or CO2. Do not use water jet.',
    special_instructions: 'Avoid overheating; oil can catch fire.'
  },
  accidental_release_measures: {
    personal_precautions: 'Avoid slipping hazard from spills.',
    environmental_precautions: 'Prevent release to waterways to avoid contamination.',
    cleanup_methods: 'Absorb with inert material and dispose properly.'
  },
  handling_and_storage: {
    handling: 'Avoid spills and slips. Store in a cool, dry place.',
    storage: 'Keep container tightly closed.'
  },
  exposure_controls_personal_protection: {
    engineering_measures: 'Not applicable.',
    eye_face_protection: 'Not required.',
    skin_body_protection: 'Not required.',
    respiratory_protection: 'Not required.',
    hygiene_measures: 'Wash hands after handling.'
  },
  physical_and_chemical_properties: {
    appearance: 'Clear to yellowish liquid',
    odor: 'Characteristic mild odor',
    pH: 'Not applicable',
    solubility: 'Insoluble in water',
    melting_point: 'Approx. -10 °C',
    boiling_point: 'Approx. 204-238 °C'
  },
  stability_and_reactivity: {
    reactivity: 'Stable.',
    stability: 'Stable under recommended storage conditions.',
    conditions_to_avoid: 'Avoid overheating.',
    incompatible_materials: 'Strong oxidizers.'
  },
  toxicological_information: {
    symptoms: 'None under normal use.'
  },
  ecological_information: {
    environmental_impact: 'Biodegradable. Avoid release to waterways.'
  },
  disposal_considerations: {
    disposal_guidance: 'Dispose in accordance with local regulations.'
  },
  transport_information: {
    UN_no: 'Not regulated',
    proper_shipping_name: 'Not regulated',
    hazard_class: '',
    packing_group: ''
  },
  regulatory_information: {
    details: 'Generally regarded as safe for food use.'
  },
  other_information: {
    information_date: '15-May-2025'
  }
});

db.chemicals.insertOne({
  substance_name: 'Washing Soda',
  recommended_use: 'Used as a cleaning agent and water softener in household laundry and cleaning products.',
  supplier: {
    name: 'Arm & Hammer',
    address: '1 Church St, Cambridge, MA 02138',
    phone: '(800) 243-8222',
    emergency_phone: '1-800-222-1222 (Poison Control)'
  },
  hazard_identification: {
    hazards: 'Causes serious eye irritation. May cause skin irritation. Harmful if swallowed.'
  },
  composition_information: {
    component: 'Sodium Carbonate',
    cas_no: '497-19-8',
    weight: '100%'
  },
  first_aid_measures: {
    eye_contact: 'Rinse cautiously with water for several minutes. Remove contact lenses if present and easy to do. Continue rinsing. Get medical attention if irritation persists.',
    skin_contact: 'Wash with plenty of soap and water. Seek medical advice if irritation occurs.',
    inhalation: 'Move to fresh air. Seek medical attention if symptoms develop.',
    ingestion: 'Rinse mouth. Do not induce vomiting. Get medical advice immediately.',
    symptoms_effects: 'Irritation of eyes and skin. May cause gastrointestinal irritation if ingested.',
    notes_to_physician: 'Treat symptomatically.'
  },
  fire_fighting_measures: {
    extinguishing_media: 'Use extinguishing media suitable for surrounding fire.',
    special_instructions: 'Non-flammable.'
  },
  accidental_release_measures: {
    personal_precautions: 'Avoid dust formation. Avoid breathing dust. Use personal protective equipment.',
    environmental_precautions: 'Prevent further leakage or spillage if safe to do so. Avoid release to environment.',
    cleanup_methods: 'Sweep up and shovel. Keep in suitable, closed containers for disposal.'
  },
  handling_and_storage: {
    handling: 'Avoid contact with skin and eyes. Avoid dust formation. Use with adequate ventilation.',
    storage: 'Store in a dry place. Keep container tightly closed.'
  },
  exposure_controls_personal_protection: {
    engineering_measures: 'Provide adequate ventilation.',
    eye_face_protection: 'Safety goggles.',
    skin_body_protection: 'Protective gloves and clothing.',
    respiratory_protection: 'Dust mask if ventilation inadequate.',
    hygiene_measures: 'Wash thoroughly after handling.'
  },
  physical_and_chemical_properties: {
    appearance: 'White crystalline powder',
    odor: 'Odorless',
    pH: '11.4 (10% solution)',
    solubility: 'Soluble in water',
    melting_point: '851 °C',
    boiling_point: 'Decomposes'
  },
  stability_and_reactivity: {
    reactivity: 'No dangerous reactions known.',
    stability: 'Stable under recommended storage conditions.',
    conditions_to_avoid: 'Moisture.',
    incompatible_materials: 'Strong acids, strong oxidizers.'
  },
  toxicological_information: {
    symptoms: 'Irritation to eyes, skin, and respiratory tract.'
  },
  ecological_information: {
    environmental_impact: 'Harmful to aquatic life with long lasting effects.'
  },
  disposal_considerations: {
    disposal_guidance: 'Dispose of in accordance with local regulations.'
  },
  transport_information: {
    UN_no: 'UN2838',
    proper_shipping_name: 'SODIUM CARBONATE',
    hazard_class: '8',
    packing_group: 'III'
  },
  regulatory_information: {
    details: 'Complies with OSHA and WHMIS.'
  },
  other_information: {
    information_date: '15-May-2025'
  }
});

db.chemicals.insertOne({
  substance_name: 'Window Cleaner',
  recommended_use: 'Household glass and window cleaning.',
  supplier: {
    name: 'Windex',
    address: '200 Lake Drive East, Suite 300, Cherry Hill, NJ 08002',
    phone: '(800) 558-5252',
    emergency_phone: '1-800-222-1222 (Poison Control)'
  },
  hazard_identification: {
    hazards: 'Causes serious eye irritation. May cause respiratory irritation. Flammable.'
  },
  composition_information: {
    component: 'Ammonia',
    cas_no: '7664-41-7',
    weight: '0.5-5%'
  },
  first_aid_measures: {
    eye_contact: 'Rinse cautiously with water for at least 15 minutes. Remove contact lenses if present and easy to do. Get medical attention if irritation persists.',
    skin_contact: 'Wash with plenty of soap and water.',
    inhalation: 'Remove person to fresh air and keep comfortable for breathing. Call a poison center if symptoms persist.',
    ingestion: 'Rinse mouth. Do NOT induce vomiting. Get medical advice immediately.',
    symptoms_effects: 'Eye and respiratory irritation.',
    notes_to_physician: 'Treat symptomatically.'
  },
  fire_fighting_measures: {
    extinguishing_media: 'Use water spray, alcohol-resistant foam, dry chemical, or CO2.',
    special_instructions: 'Wear self-contained breathing apparatus for firefighting if necessary.'
  },
  accidental_release_measures: {
    personal_precautions: 'Avoid contact with skin, eyes, and inhalation. Use protective equipment.',
    environmental_precautions: 'Prevent release to environment.',
    cleanup_methods: 'Absorb with inert material and dispose properly.'
  },
  handling_and_storage: {
    handling: 'Use only outdoors or in a well-ventilated area. Avoid breathing vapors.',
    storage: 'Keep container tightly closed. Store in a cool, dry place away from heat sources.'
  },
  exposure_controls_personal_protection: {
    engineering_measures: 'Ensure adequate ventilation.',
    eye_face_protection: 'Safety goggles.',
    skin_body_protection: 'Protective gloves recommended.',
    respiratory_protection: 'Use NIOSH approved respirator if exposure limits exceeded.',
    hygiene_measures: 'Wash hands after handling.'
  },
  physical_and_chemical_properties: {
    appearance: 'Clear blue liquid',
    odor: 'Ammonia-like odor',
    pH: '10-11',
    solubility: 'Miscible with water',
    melting_point: 'Not applicable',
    boiling_point: 'Not applicable'
  },
  stability_and_reactivity: {
    reactivity: 'Stable under normal conditions.',
    stability: 'Stable.',
    conditions_to_avoid: 'Heat, sparks, open flames.',
    incompatible_materials: 'Strong acids, strong oxidizers.'
  },
  toxicological_information: {
    symptoms: 'Irritation of eyes, skin, and respiratory tract.'
  },
  ecological_information: {
    environmental_impact: 'May be harmful to aquatic life.'
  },
  disposal_considerations: {
    disposal_guidance: 'Dispose according to local regulations.'
  },
  transport_information: {
    UN_no: 'UN2672',
    proper_shipping_name: 'AMMONIA SOLUTION',
    hazard_class: '8',
    packing_group: 'III'
  },
  regulatory_information: {
    details: 'Complies with OSHA and WHMIS.'
  },
  other_information: {
    information_date: '15-May-2025'
  }
});

db.chemicals.insertOne({
  substance_name: 'Xylene',
  recommended_use: 'Used as a solvent in paint thinners, adhesives, and cleaning products.',
  supplier: {
    name: 'Sigma-Aldrich',
    address: '3050 Spruce St, St. Louis, MO 63103',
    phone: '(800) 325-3010',
    emergency_phone: '1-800-424-9300 (CHEMTREC)'
  },
  hazard_identification: {
    hazards: 'Flammable liquid and vapor. Causes skin irritation and serious eye irritation. May cause drowsiness or dizziness. Harmful if inhaled.'
  },
  composition_information: {
    component: 'Xylene (mixed isomers)',
    cas_no: '1330-20-7',
    weight: '100%'
  },
  first_aid_measures: {
    eye_contact: 'Rinse cautiously with water for several minutes. Remove contact lenses if present. Seek medical attention if irritation persists.',
    skin_contact: 'Wash with plenty of soap and water. Remove contaminated clothing.',
    inhalation: 'Move to fresh air. If breathing is difficult, give oxygen. Get medical attention.',
    ingestion: 'Do not induce vomiting. Seek medical attention immediately.',
    symptoms_effects: 'Headache, dizziness, nausea, respiratory irritation.',
    notes_to_physician: 'Treat symptomatically.'
  },
  fire_fighting_measures: {
    extinguishing_media: 'Use dry chemical, CO2, foam, or water spray.',
    special_instructions: 'Wear self-contained breathing apparatus and protective clothing.'
  },
  accidental_release_measures: {
    personal_precautions: 'Remove ignition sources. Use personal protective equipment. Avoid inhalation and skin contact.',
    environmental_precautions: 'Prevent further leakage or spillage. Avoid release to the environment.',
    cleanup_methods: 'Contain spill with inert absorbent material. Collect in appropriate containers for disposal.'
  },
  handling_and_storage: {
    handling: 'Avoid breathing vapors. Use in well-ventilated areas. Keep away from heat, sparks, open flames.',
    storage: 'Store in tightly closed containers in a cool, dry, well-ventilated area away from ignition sources.'
  },
  exposure_controls_personal_protection: {
    engineering_measures: 'Use local exhaust ventilation.',
    eye_face_protection: 'Chemical safety goggles.',
    skin_body_protection: 'Protective gloves and clothing.',
    respiratory_protection: 'Use NIOSH-approved respirators if exposure limits are exceeded.',
    hygiene_measures: 'Wash hands and skin after handling.'
  },
  physical_and_chemical_properties: {
    appearance: 'Colorless liquid',
    odor: 'Sweet, aromatic',
    pH: 'Not applicable',
    solubility: 'Slightly soluble in water',
    melting_point: '-47 °C',
    boiling_point: '138-144 °C'
  },
  stability_and_reactivity: {
    reactivity: 'Stable under recommended conditions.',
    stability: 'Stable.',
    conditions_to_avoid: 'Heat, sparks, open flames.',
    incompatible_materials: 'Strong oxidizers, acids, alkalis.'
  },
  toxicological_information: {
    symptoms: 'Central nervous system depression, respiratory irritation, skin and eye irritation.'
  },
  ecological_information: {
    environmental_impact: 'Toxic to aquatic life with long-lasting effects.'
  },
  disposal_considerations: {
    disposal_guidance: 'Dispose in accordance with local regulations.'
  },
  transport_information: {
    UN_no: 'UN1307',
    proper_shipping_name: 'XYLENES',
    hazard_class: '3',
    packing_group: 'III'
  },
  regulatory_information: {
    details: 'Complies with OSHA and WHMIS.'
  },
  other_information: {
    information_date: '15-May-2025'
  }
});

db.chemicals.insertOne({
  substance_name: 'Hydrogen Peroxide',
  recommended_use: 'Used as a disinfectant, bleaching agent, and cleaning product.',
  supplier: {
    name: 'Procter & Gamble',
    address: '1 P&G Plaza, Cincinnati, OH 45202',
    phone: '(800) 742-5877',
    emergency_phone: '1-800-222-1222 (Poison Control)'
  },
  hazard_identification: {
    hazards: 'Oxidizing liquid. Causes serious eye damage. May cause skin irritation. Harmful if swallowed or inhaled.'
  },
  composition_information: {
    component: 'Hydrogen Peroxide',
    cas_no: '7722-84-1',
    weight: '3-6%'  
  },
  first_aid_measures: {
    eye_contact: 'Rinse cautiously with water for several minutes. Remove contact lenses if present and easy to do. Seek medical attention immediately.',
    skin_contact: 'Wash skin with plenty of water. Remove contaminated clothing.',
    inhalation: 'Move person to fresh air. If breathing is difficult, give oxygen. Seek medical attention.',
    ingestion: 'Do not induce vomiting. Rinse mouth. Get medical advice immediately.',
    symptoms_effects: 'Irritation to eyes, skin, respiratory tract. May cause burns in higher concentrations.',
    notes_to_physician: 'Treat symptomatically.'
  },
  fire_fighting_measures: {
    extinguishing_media: 'Use water spray, foam, dry chemical or carbon dioxide.',
    special_instructions: 'Use protective equipment and self-contained breathing apparatus.'
  },
  accidental_release_measures: {
    personal_precautions: 'Avoid contact with skin and eyes. Use protective gloves and eyewear.',
    environmental_precautions: 'Prevent entry into waterways and drains.',
    cleanup_methods: 'Dilute with plenty of water and mop up. Collect contaminated material for disposal.'
  },
  handling_and_storage: {
    handling: 'Handle with care. Avoid contact with combustible materials.',
    storage: 'Store in a cool, well-ventilated place away from incompatible substances.'
  },
  exposure_controls_personal_protection: {
    engineering_measures: 'Provide adequate ventilation.',
    eye_face_protection: 'Safety goggles or face shield.',
    skin_body_protection: 'Protective gloves and clothing.',
    respiratory_protection: 'Use respiratory protection if ventilation is inadequate.',
    hygiene_measures: 'Wash hands thoroughly after handling.'
  },
  physical_and_chemical_properties: {
    appearance: 'Clear, colorless liquid',
    odor: 'Slightly sharp odor',
    pH: '3.5-4.5',
    solubility: 'Miscible with water',
    melting_point: '-0.43 °C',
    boiling_point: '150.2 °C (decomposes)'
  },
  stability_and_reactivity: {
    reactivity: 'Strong oxidizer; reacts with reducing agents.',
    stability: 'Stable under recommended storage conditions.',
    conditions_to_avoid: 'Heat, sunlight, contamination with organic materials.',
    incompatible_materials: 'Combustible materials, reducing agents, metals.'
  },
  toxicological_information: {
    symptoms: 'Irritation, burns, respiratory distress at high exposure.'
  },
  ecological_information: {
    environmental_impact: 'Decomposes rapidly to water and oxygen; low environmental persistence.'
  },
  disposal_considerations: {
    disposal_guidance: 'Dilute and dispose in accordance with local regulations.'
  },
  transport_information: {
    UN_no: 'UN2014',
    proper_shipping_name: 'HYDROGEN PEROXIDE, AQUEOUS SOLUTION',
    hazard_class: '5.1',
    packing_group: 'III'
  },
  regulatory_information: {
    details: 'Complies with OSHA and WHMIS.'
  },
  other_information: {
    information_date: '15-May-2025'
  }
});

db.chemicals.insertOne({
  substance_name: 'Yeast Extract',
  recommended_use: 'Used as a flavoring agent in food and nutritional supplements.',
  supplier: {
    name: 'Lesaffre',
    address: '850 Route de la Reine, 92100 Boulogne-Billancourt, France',
    phone: '+33 1 49 10 20 00',
    emergency_phone: 'Not hazardous'
  },
  hazard_identification: {
    hazards: 'No significant hazards known.'
  },
  composition_information: {
    component: 'Yeast Extract',
    cas_no: '8030-15-1',
    weight: '100%'
  },
  first_aid_measures: {
    eye_contact: 'Flush with water if irritation occurs.',
    skin_contact: 'Wash with soap and water if irritation occurs.',
    inhalation: 'Avoid inhalation of dust.',
    ingestion: 'Generally recognized as safe; no hazards expected.',
    symptoms_effects: 'None known.',
    notes_to_physician: 'Not applicable.'
  },
  fire_fighting_measures: {
    extinguishing_media: 'Use water spray, foam, or dry chemical.',
    special_instructions: 'No special precautions.'
  },
  accidental_release_measures: {
    personal_precautions: 'Avoid dust formation. Use dust mask if necessary.',
    environmental_precautions: 'No known environmental hazards.',
    cleanup_methods: 'Sweep or vacuum spilled material.'
  },
  handling_and_storage: {
    handling: 'Avoid dust formation. Handle in well-ventilated area.',
    storage: 'Store in a cool, dry place.'
  },
  exposure_controls_personal_protection: {
    engineering_measures: 'General ventilation.',
    eye_face_protection: 'Not normally required.',
    skin_body_protection: 'Not normally required.',
    respiratory_protection: 'Use dust mask if dust formation occurs.',
    hygiene_measures: 'Wash hands after handling.'
  },
  physical_and_chemical_properties: {
    appearance: 'Brown powder',
    odor: 'Characteristic yeast smell',
    pH: 'Not applicable',
    solubility: 'Soluble in water',
    melting_point: 'Not applicable',
    boiling_point: 'Not applicable'
  },
  stability_and_reactivity: {
    reactivity: 'Stable under normal conditions.',
    stability: 'Stable.',
    conditions_to_avoid: 'None known.',
    incompatible_materials: 'None known.'
  },
  toxicological_information: {
    symptoms: 'None known.'
  },
  ecological_information: {
    environmental_impact: 'No known adverse effects.'
  },
  disposal_considerations: {
    disposal_guidance: 'Dispose of in accordance with local regulations.'
  },
  transport_information: {
    UN_no: 'Not regulated',
    proper_shipping_name: 'Not regulated',
    hazard_class: 'Not regulated',
    packing_group: 'Not regulated'
  },
  regulatory_information: {
    details: 'Generally recognized as safe (GRAS).'
  },
  other_information: {
    information_date: '15-May-2025'
  }
});


db.chemicals.insertOne({
  substance_name: 'Zinc Oxide',
  recommended_use: 'Used in sunscreens, diaper rash creams, and as an additive in rubber and paints.',
  supplier: {
    name: 'Sigma-Aldrich',
    address: '3050 Spruce St, St. Louis, MO 63103',
    phone: '(800) 325-3010',
    emergency_phone: '1-800-424-9300 (CHEMTREC)'
  },
  hazard_identification: {
    hazards: 'May cause respiratory irritation if inhaled in dust form. Not classified as hazardous in typical consumer use.'
  },
  composition_information: {
    component: 'Zinc Oxide',
    cas_no: '1314-13-2',
    weight: '100%'
  },
  first_aid_measures: {
    eye_contact: 'Rinse cautiously with water for several minutes. Remove contact lenses if present.',
    skin_contact: 'Wash with soap and water.',
    inhalation: 'Move to fresh air. If breathing is difficult, seek medical attention.',
    ingestion: 'Rinse mouth. Seek medical advice if symptoms occur.',
    symptoms_effects: 'May cause mild irritation to eyes, skin, or respiratory tract.',
    notes_to_physician: 'Treat symptomatically.'
  },
  fire_fighting_measures: {
    extinguishing_media: 'Use extinguishing media suitable for surrounding fire.',
    special_instructions: 'Non-combustible.'
  },
  accidental_release_measures: {
    personal_precautions: 'Avoid dust formation. Use appropriate respiratory protection if necessary.',
    environmental_precautions: 'Prevent release to waterways.',
    cleanup_methods: 'Sweep or vacuum and dispose in accordance with local regulations.'
  },
  handling_and_storage: {
    handling: 'Avoid creating dust. Use in well-ventilated areas.',
    storage: 'Store in a dry, cool, well-ventilated place.'
  },
  exposure_controls_personal_protection: {
    engineering_measures: 'Provide adequate ventilation.',
    eye_face_protection: 'Safety goggles if dust is present.',
    skin_body_protection: 'Protective gloves recommended if handling large quantities.',
    respiratory_protection: 'Use dust mask if dust levels exceed limits.',
    hygiene_measures: 'Wash hands after handling.'
  },
  physical_and_chemical_properties: {
    appearance: 'White powder',
    odor: 'Odorless',
    pH: 'Not applicable',
    solubility: 'Insoluble in water',
    melting_point: '1975 °C',
    boiling_point: 'Not applicable (decomposes)'
  },
  stability_and_reactivity: {
    reactivity: 'Stable.',
    stability: 'Stable under normal conditions.',
    conditions_to_avoid: 'None known.',
    incompatible_materials: 'Strong acids.'
  },
  toxicological_information: {
    symptoms: 'May cause mild irritation to respiratory tract if inhaled as dust.'
  },
  ecological_information: {
    environmental_impact: 'Not expected to bioaccumulate. Low toxicity to aquatic organisms.'
  },
  disposal_considerations: {
    disposal_guidance: 'Dispose in accordance with local regulations.'
  },
  transport_information: {
    UN_no: 'Not regulated',
    proper_shipping_name: 'Not regulated',
    hazard_class: 'Not regulated',
    packing_group: 'Not regulated'
  },
  regulatory_information: {
    details: 'Complies with OSHA and WHMIS standards.'
  },
  other_information: {
    information_date: '15-May-2025'
  }
});

