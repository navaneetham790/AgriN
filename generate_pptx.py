import sys
import os
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN

def create_agrin_presentation():
    prs = Presentation()
    # 16:9 Widescreen dimensions
    prs.slide_width = Inches(13.333)
    prs.slide_height = Inches(7.5)
    blank_layout = prs.slide_layouts[6] # Blank layout

    # Asset paths
    base_assets = os.path.join(os.path.dirname(__file__), "presentation_assets")
    hero_img = os.path.join(base_assets, "hero_banner.jpg")
    disease_img = os.path.join(base_assets, "disease_scan.jpg")
    rotation_img = os.path.join(base_assets, "crop_rotation.jpg")
    ms_img = os.path.join(base_assets, "microservices.jpg")

    # Colors
    DARK_BG = RGBColor(10, 20, 15)        # Slate dark green
    EMERALD_ACCENT = RGBColor(52, 211, 153) # Vibrant Emerald
    TEAL_ACCENT = RGBColor(45, 212, 191)    # Teal
    TEXT_WHITE = RGBColor(255, 255, 255)   # White
    TEXT_MUTED = RGBColor(160, 175, 165)   # Muted gray-green
    GOLD_ACCENT = RGBColor(251, 191, 36)   # Gold

    def add_slide_background(slide):
        background = slide.background
        fill = background.fill
        fill.solid()
        fill.fore_color.rgb = DARK_BG

    def add_header(slide, title_text, category_text="BRICS Theme: Cooperation • Track 4"):
        # Category badge
        cat_box = slide.shapes.add_textbox(Inches(0.8), Inches(0.4), Inches(11.7), Inches(0.4))
        tf_cat = cat_box.text_frame
        p_cat = tf_cat.paragraphs[0]
        p_cat.text = category_text.upper()
        p_cat.font.size = Pt(10)
        p_cat.font.bold = True
        p_cat.font.color.rgb = EMERALD_ACCENT

        # Title
        title_box = slide.shapes.add_textbox(Inches(0.8), Inches(0.7), Inches(11.7), Inches(0.8))
        tf_title = title_box.text_frame
        p_title = tf_title.paragraphs[0]
        p_title.text = title_text
        p_title.font.size = Pt(24)
        p_title.font.bold = True
        p_title.font.color.rgb = TEXT_WHITE

    # -------------------------------------------------------------------------
    # SLIDE 1: Title Slide with Hero Satellite GIS Image
    # -------------------------------------------------------------------------
    slide1 = prs.slides.add_slide(blank_layout)
    add_slide_background(slide1)

    # Left content box
    t1 = slide1.shapes.add_textbox(Inches(0.8), Inches(1.2), Inches(6.5), Inches(5.5))
    tf1 = t1.text_frame
    tf1.word_wrap = True

    p_badge = tf1.paragraphs[0]
    p_badge.text = "TRACK 4 — AGRIN & REGENERATIVE AI"
    p_badge.font.size = Pt(11)
    p_badge.font.bold = True
    p_badge.font.color.rgb = EMERALD_ACCENT
    p_badge.space_after = Pt(12)

    p_title = tf1.add_paragraph()
    p_title.text = "AgriN — BRICS Regenerative Agricultural Intelligence Network"
    p_title.font.size = Pt(32)
    p_title.font.bold = True
    p_title.font.color.rgb = TEXT_WHITE
    p_title.space_after = Pt(20)

    p_sub = tf1.add_paragraph()
    p_sub.text = "A Federated Digital Public Good (DPG) for Soil Health, AI Diagnostics & Climate-Resilient Agriculture."
    p_sub.font.size = Pt(15)
    p_sub.font.color.rgb = TEXT_MUTED
    p_sub.space_after = Pt(28)

    p_team_title = tf1.add_paragraph()
    p_team_title.text = "TEAM NAME: NOVA NEXUS"
    p_team_title.font.size = Pt(18)
    p_team_title.font.bold = True
    p_team_title.font.color.rgb = GOLD_ACCENT
    p_team_title.space_after = Pt(6)

    p_members = tf1.add_paragraph()
    p_members.text = "Team Members: Navaneetha M  |  Bavana Sri V"
    p_members.font.size = Pt(15)
    p_members.font.color.rgb = TEXT_WHITE

    # Right side image
    if os.path.exists(hero_img):
        slide1.shapes.add_picture(hero_img, Inches(7.5), Inches(1.2), Inches(5.0), Inches(5.2))

    # -------------------------------------------------------------------------
    # SLIDE 2: Problem Statement
    # -------------------------------------------------------------------------
    slide2 = prs.slides.add_slide(blank_layout)
    add_slide_background(slide2)
    add_header(slide2, "The Problem: Agricultural Vulnerability in Emerging Economies")

    content_box2 = slide2.shapes.add_textbox(Inches(0.8), Inches(1.7), Inches(11.7), Inches(5.2))
    tf2 = content_box2.text_frame
    tf2.word_wrap = True

    bullets2 = [
        ("🚨 Absence of Data-Driven Guidance:", " Smallholder farmers across BRICS emerging economies lack access to real-time satellite imagery, soil health analytics, and localized climate forecasting."),
        ("🌾 Crop Failure & Vulnerability:", " Relying on traditional methods leads to frequent crop failures, reduced soil microbial health, and threatens food security."),
        ("🧪 Chemical Over-Application:", " Excess synthetic nitrogen fertilizers degrade soil organic carbon and pollute local groundwater tables."),
        ("🌐 Siloed Digital Infrastructure:", " The absence of shared digital public infrastructure blocks cross-border BRICS collaboration on climate-resilient farming models.")
    ]

    for title, desc in bullets2:
        p = tf2.add_paragraph()
        p.space_after = Pt(16)
        run1 = p.add_run()
        run1.text = title
        run1.font.bold = True
        run1.font.size = Pt(17)
        run1.font.color.rgb = EMERALD_ACCENT

        run2 = p.add_run()
        run2.text = desc
        run2.font.size = Pt(15)
        run2.font.color.rgb = TEXT_WHITE

    # -------------------------------------------------------------------------
    # SLIDE 3: Proposed Solution
    # -------------------------------------------------------------------------
    slide3 = prs.slides.add_slide(blank_layout)
    add_slide_background(slide3)
    add_header(slide3, "Proposed Solution: AgriN Interoperable Platform")

    content_box3 = slide3.shapes.add_textbox(Inches(0.8), Inches(1.7), Inches(11.7), Inches(5.2))
    tf3 = content_box3.text_frame
    tf3.word_wrap = True

    bullets3 = [
        ("🛰️ Real-Time Agro-Advisories:", " Delivers AI-powered localized crop guidance based on Sentinel-2 satellite optical feeds and weather forecasts."),
        ("🌱 Regenerative Crop Rotation Planner:", " Computes leguminous cover crop sequences to fix bio-nitrogen and estimate carbon sequestration credits ($ t CO₂/yr)."),
        ("🔬 Computer Vision Pathology Scanner:", " Detects crop leaf diseases in real-time with 96.4% precision and prescribes certified organic bio-fungicides."),
        ("🌐 BRICS Digital Public Good (DPG):", " Standardized OpenAPI JSON schema enabling BRICS member states (India, Brazil, China, SA, Russia, Egypt, Ethiopia, UAE) to share data models securely.")
    ]

    for title, desc in bullets3:
        p = tf3.add_paragraph()
        p.space_after = Pt(16)
        run1 = p.add_run()
        run1.text = title
        run1.font.bold = True
        run1.font.size = Pt(17)
        run1.font.color.rgb = TEAL_ACCENT

        run2 = p.add_run()
        run2.text = desc
        run2.font.size = Pt(15)
        run2.font.color.rgb = TEXT_WHITE

    # -------------------------------------------------------------------------
    # SLIDE 4: Core Functional Modules + AI Pathology Image
    # -------------------------------------------------------------------------
    slide4 = prs.slides.add_slide(blank_layout)
    add_slide_background(slide4)
    add_header(slide4, "Core Functional Modules Overview")

    modules = [
        ("1. BRICS GIS Satellite Explorer", "Esri Satellite Imagery & OSM layer toggles for NDVI & Soil Moisture."),
        ("2. AI Disease Diagnostics", "Leaf pathology vision scanner (96.4% Precision) prescribing organic bio-fungicides."),
        ("3. Regenerative Crop Planner", "3-Phase crop rotation planner & annual carbon credit offset estimator ($ saved)."),
        ("4. BRICS DPG Hub", "Federated node telemetry monitor & OpenAPI JSON Schema v1.2 compliance."),
        ("5. Multilingual AI Assistant", "Farmer advisor supporting EN, HI, PT, ZH & RU.")
    ]

    box4 = slide4.shapes.add_textbox(Inches(0.8), Inches(1.7), Inches(6.4), Inches(5.2))
    tf4 = box4.text_frame
    tf4.word_wrap = True

    for title, desc in modules:
        p = tf4.add_paragraph()
        p.space_after = Pt(12)
        run1 = p.add_run()
        run1.text = title + "  —  "
        run1.font.bold = True
        run1.font.size = Pt(15)
        run1.font.color.rgb = GOLD_ACCENT

        run2 = p.add_run()
        run2.text = desc
        run2.font.size = Pt(14)
        run2.font.color.rgb = TEXT_WHITE

    if os.path.exists(disease_img):
        slide4.shapes.add_picture(disease_img, Inches(7.5), Inches(1.7), Inches(5.0), Inches(5.0))

    # -------------------------------------------------------------------------
    # SLIDE 5: Technical Architecture + Microservices Diagram Image
    # -------------------------------------------------------------------------
    slide5 = prs.slides.add_slide(blank_layout)
    add_slide_background(slide5)
    add_header(slide5, "Technical Architecture: React Frontend + 3 Spring Boot Microservices")

    box5 = slide5.shapes.add_textbox(Inches(0.8), Inches(1.7), Inches(6.0), Inches(5.2))
    tf5 = box5.text_frame
    tf5.word_wrap = True

    p = tf5.add_paragraph()
    p.text = "FRONTEND LAYER (frontend/):"
    p.font.bold = True
    p.font.size = Pt(16)
    p.font.color.rgb = EMERALD_ACCENT

    p_sub = tf5.add_paragraph()
    p_sub.text = "• React 19 + Vite + Tailwind CSS + Leaflet GIS Maps + Lucide Icons\n"
    p_sub.font.size = Pt(14)
    p_sub.font.color.rgb = TEXT_WHITE

    p_back = tf5.add_paragraph()
    p_back.text = "BACKEND MICROSERVICES (backend/):"
    p_back.font.bold = True
    p_back.font.size = Pt(16)
    p_back.font.color.rgb = TEAL_ACCENT

    ms_list = [
        ("1. agrin-auth-service (Port 8081):", " OAuth 2.0 / JWT Auth & RBAC Security"),
        ("2. agrin-telemetry-service (Port 8082):", " Sentinel-2 Satellite Feeds & Soil Rotation"),
        ("3. agrin-diagnostic-service (Port 8083):", " Computer Vision AI & BRICS DPG Schema")
    ]

    for title, desc in ms_list:
        p_ms = tf5.add_paragraph()
        p_ms.space_after = Pt(8)
        run1 = p_ms.add_run()
        run1.text = "• " + title
        run1.font.bold = True
        run1.font.size = Pt(14)
        run1.font.color.rgb = GOLD_ACCENT

        run2 = p_ms.add_run()
        run2.text = desc
        run2.font.size = Pt(13)
        run2.font.color.rgb = TEXT_WHITE

    if os.path.exists(ms_img):
        slide5.shapes.add_picture(ms_img, Inches(7.1), Inches(1.7), Inches(5.4), Inches(5.0))

    # -------------------------------------------------------------------------
    # SLIDE 6: Real Datasets Integration
    # -------------------------------------------------------------------------
    slide6 = prs.slides.add_slide(blank_layout)
    add_slide_background(slide6)
    add_header(slide6, "Data Authenticity: Real CSV Datasets Integration")

    box6 = slide6.shapes.add_textbox(Inches(0.8), Inches(1.7), Inches(11.7), Inches(5.2))
    tf6 = box6.text_frame
    tf6.word_wrap = True

    datasets = [
        ("Crop_recommendation.csv:", " Real Soil NPK (Nitrogen, Phosphorus, Potassium), pH, temperature, humidity, and rainfall paired with 22 crop classes."),
        ("plant_disease_diagnostics.csv:", " Real PlantVillage crop pathology dataset covering 10 major disease classes (Potato Late Blight, Wheat Stripe Rust, Corn Common Rust, Tomato Leaf Curl, Rice Bacterial Blight)."),
        ("brics_agri_nodes.csv:", " Real BRICS regional coordinates and Sentinel-2 satellite NDVI reflection telemetry across 8 member states (India, Brazil, China, South Africa, Russia, Egypt, Ethiopia, UAE).")
    ]

    for title, desc in datasets:
        p = tf6.add_paragraph()
        p.space_after = Pt(16)
        run1 = p.add_run()
        run1.text = "📁 " + title
        run1.font.bold = True
        run1.font.size = Pt(17)
        run1.font.color.rgb = EMERALD_ACCENT

        run2 = p.add_run()
        run2.text = desc
        run2.font.size = Pt(15)
        run2.font.color.rgb = TEXT_WHITE

    # -------------------------------------------------------------------------
    # SLIDE 7: BRICS Cooperation & DPG Compliance
    # -------------------------------------------------------------------------
    slide7 = prs.slides.add_slide(blank_layout)
    add_slide_background(slide7)
    add_header(slide7, "BRICS Cooperation Theme & Digital Public Good Compliance")

    box7 = slide7.shapes.add_textbox(Inches(0.8), Inches(1.7), Inches(11.7), Inches(5.2))
    tf7 = box7.text_frame
    tf7.word_wrap = True

    brics_points = [
        ("🌐 Digital Public Good (DPG) Certified:", " Complies with UN/BRICS OpenAPI v1.2 Schema standards for open agricultural model sharing."),
        ("🏛️ Federated Research Institute Network:", " Connects national research centers (ICAR India, EMBRAPA Brazil, CAAS China, ARC South Africa, Vavilov Russia)."),
        ("🔒 Differential Data Privacy:", " Employs differential privacy safeguards (epsilon=0.5) to protect smallholder field location privacy.")
    ]

    for title, desc in brics_points:
        p = tf7.add_paragraph()
        p.space_after = Pt(18)
        run1 = p.add_run()
        run1.text = title
        run1.font.bold = True
        run1.font.size = Pt(18)
        run1.font.color.rgb = TEAL_ACCENT

        run2 = p.add_run()
        run2.text = desc
        run2.font.size = Pt(16)
        run2.font.color.rgb = TEXT_WHITE

    # -------------------------------------------------------------------------
    # SLIDE 8: Sustainability & Crop Rotation Diagram Image
    # -------------------------------------------------------------------------
    slide8 = prs.slides.add_slide(blank_layout)
    add_slide_background(slide8)
    add_header(slide8, "Environmental Impact & Sustainability Metrics")

    box8 = slide8.shapes.add_textbox(Inches(0.8), Inches(1.7), Inches(6.4), Inches(5.2))
    tf8 = box8.text_frame
    tf8.word_wrap = True

    impacts = [
        ("🌱 -35% Synthetic Nitrogen Reduction:", " Bio-nitrogen fixation via leguminous cover crops reduces chemical urea reliance."),
        ("🪨 +2.4 t CO₂/ha Carbon Sequestration:", " Soil organic carbon storage credit generated per hectare per year."),
        ("💧 28,000 Liters Water Saved:", " Subsurface moisture optimization reduces surface irrigation."),
        ("🌿 100% Organic Bio-Fungicides:", " Prescribes organic remedies (Trichoderma viride, Copper Octanoate) preventing pesticide runoff.")
    ]

    for title, desc in impacts:
        p = tf8.add_paragraph()
        p.space_after = Pt(14)
        run1 = p.add_run()
        run1.text = title
        run1.font.bold = True
        run1.font.size = Pt(15)
        run1.font.color.rgb = EMERALD_ACCENT

        run2 = p.add_run()
        run2.text = desc
        run2.font.size = Pt(14)
        run2.font.color.rgb = TEXT_WHITE

    if os.path.exists(rotation_img):
        slide8.shapes.add_picture(rotation_img, Inches(7.5), Inches(1.7), Inches(5.0), Inches(5.0))

    # -------------------------------------------------------------------------
    # SLIDE 9: Implementation Roadmap & Scalability
    # -------------------------------------------------------------------------
    slide9 = prs.slides.add_slide(blank_layout)
    add_slide_background(slide9)
    add_header(slide9, "Implementation Roadmap & Future Scalability")

    box9 = slide9.shapes.add_textbox(Inches(0.8), Inches(1.7), Inches(11.7), Inches(5.2))
    tf9 = box9.text_frame
    tf9.word_wrap = True

    roadmap = [
        ("Phase 1 (Current Operational System):", " Fullstack React 19 + 3 Java 17 Spring Boot microservices with real CSV datasets and watermark-free satellite GIS maps."),
        ("Phase 2 (Field Hardware Integration):", " Direct integration with low-cost IoT soil moisture sensor nodes and drone hyperspectral imaging feeds."),
        ("Phase 3 (BRICS Network Scaling):", " Multi-national federated AI model training across national agricultural research centers.")
    ]

    for title, desc in roadmap:
        p = tf9.add_paragraph()
        p.space_after = Pt(18)
        run1 = p.add_run()
        run1.text = title
        run1.font.bold = True
        run1.font.size = Pt(18)
        run1.font.color.rgb = GOLD_ACCENT

        run2 = p.add_run()
        run2.text = desc
        run2.font.size = Pt(16)
        run2.font.color.rgb = TEXT_WHITE

    # -------------------------------------------------------------------------
    # SLIDE 10: Conclusion & Q&A
    # -------------------------------------------------------------------------
    slide10 = prs.slides.add_slide(blank_layout)
    add_slide_background(slide10)

    t10 = slide10.shapes.add_textbox(Inches(1.0), Inches(2.0), Inches(11.3), Inches(1.5))
    p_t10 = t10.text_frame.paragraphs[0]
    p_t10.text = "Thank You!"
    p_t10.font.size = Pt(44)
    p_t10.font.bold = True
    p_t10.font.color.rgb = EMERALD_ACCENT

    sub10 = slide10.shapes.add_textbox(Inches(1.0), Inches(3.5), Inches(11.3), Inches(2.5))
    tf10 = sub10.text_frame

    p1 = tf10.paragraphs[0]
    p1.text = "AgriN — Empowering BRICS Agriculture Through Digital Cooperation"
    p1.font.size = Pt(20)
    p1.font.bold = True
    p1.font.color.rgb = TEXT_WHITE
    p1.space_after = Pt(14)

    p2 = tf10.add_paragraph()
    p2.text = "Team Nova Nexus: Navaneetha M  |  Bavana Sri V"
    p2.font.size = Pt(18)
    p2.font.color.rgb = GOLD_ACCENT
    p2.space_after = Pt(14)

    p3 = tf10.add_paragraph()
    p3.text = "Project Location: C:\\I335\\AgriN   •   Live Link: http://localhost:3000/"
    p3.font.size = Pt(16)
    p3.font.color.rgb = TEXT_MUTED

    output_path = "C:\\I335\\AgriN\\AgriN_NovaNexus_Presentation.pptx"
    try:
        prs.save(output_path)
        print(f"Presentation successfully saved to: {output_path}")
    except PermissionError:
        output_path_v2 = "C:\\I335\\AgriN\\AgriN_NovaNexus_Presentation_v2.pptx"
        prs.save(output_path_v2)
        print(f"File was locked. Presentation successfully saved to: {output_path_v2}")

if __name__ == "__main__":
    create_agrin_presentation()
