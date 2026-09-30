package com.agrin.telemetry;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/telemetry")
@CrossOrigin(origins = "*")
public class TelemetryController {

    @GetMapping("/regions")
    public List<Map<String, Object>> getBricsRegions() {
        List<Map<String, Object>> regions = new ArrayList<>();

        Map<String, Object> india = new HashMap<>();
        india.put("id", "in-punjab");
        india.put("country", "India");
        india.put("regionName", "Punjab Agricultural Belt");
        india.put("lat", 30.9009);
        india.put("lng", 75.8573);
        india.put("soilMoisture", 42);
        india.put("ndvi", 0.74);
        india.put("organicCarbon", 0.58);
        regions.add(india);

        Map<String, Object> brazil = new HashMap<>();
        brazil.put("id", "br-matogrosso");
        brazil.put("country", "Brazil");
        brazil.put("regionName", "Mato Grosso Savanna Basin");
        brazil.put("lat", -12.6819);
        brazil.put("lng", -55.7042);
        brazil.put("soilMoisture", 38);
        brazil.put("ndvi", 0.81);
        brazil.put("organicCarbon", 1.12);
        regions.add(brazil);

        return regions;
    }

    @GetMapping("/health")
    public Map<String, Object> health() {
        Map<String, Object> status = new HashMap<>();
        status.put("service", "agrin-telemetry-service");
        status.put("port", 8082);
        status.put("status", "UP");
        status.put("satellites_monitored", Arrays.asList("Sentinel-2A", "Sentinel-2B", "Landsat-9"));
        return status;
    }
}
