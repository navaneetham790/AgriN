package com.agrin.diagnostic;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/diagnostic")
@CrossOrigin(origins = "*")
public class DiagnosticController {

    @GetMapping("/diseases")
    public List<Map<String, Object>> getDiseases() {
        List<Map<String, Object>> diseases = new ArrayList<>();

        Map<String, Object> lateBlight = new HashMap<>();
        lateBlight.put("id", "potato-late-blight");
        lateBlight.put("name", "Potato Late Blight");
        lateBlight.put("scientificName", "Phytophthora infestans");
        lateBlight.put("severity", "High");
        lateBlight.put("organicTreatment", "Foliar spray of Copper Octanoate or Trichoderma viride bio-fungicide every 7 days.");
        diseases.add(lateBlight);

        return diseases;
    }

    @GetMapping("/health")
    public Map<String, Object> health() {
        Map<String, Object> status = new HashMap<>();
        status.put("service", "agrin-diagnostic-service");
        status.put("port", 8083);
        status.put("status", "UP");
        status.put("dpg_standard", "BRICS AgriN OpenAPI v1.2");
        return status;
    }
}
