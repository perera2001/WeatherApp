package com.example.weatherapp.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class WeatherController {
    @GetMapping("api/weather")
    public List<Map<String,Object>> getWeather() {
          return List.of(
                  Map.of("name","Colombo","weather",List.of(Map.of("description","Sunny")),"main",Map.of("temp","30")),
                  Map.of("name","Tokyo","weather",List.of(Map.of("description","Cloudy")),"main",Map.of("temp",22))

          );
    }
}
