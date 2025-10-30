package com.zosh.controller;

import com.zosh.mapper.SalonMapper;
import com.zosh.modal.Salon;
import com.zosh.payload.dto.SalonDTO;
import com.zosh.payload.dto.UserDTO;
import com.zosh.service.SalonService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/salons")
@RequiredArgsConstructor
public class SalonController {
   private final SalonService salonService;

   //  http://localhost:5002/api/salons
   @PostMapping
   public ResponseEntity<SalonDTO> createSalon
   (@RequestBody SalonDTO salonDTO){
       UserDTO userDTO=new UserDTO();
       userDTO.setId(1L);
   Salon salon=salonService.createSalon(salonDTO,userDTO);
SalonDTO salonDTO1= SalonMapper.mapToDTO(salon);
return ResponseEntity.ok(salonDTO1);


   }
    //  http://localhost:5002/api/salons/2
    @PatchMapping ("/{id}")
    public ResponseEntity<SalonDTO> updateSalon(
            @PathVariable("id") Long salonId,
            @RequestBody SalonDTO salonDTO) throws Exception {
        UserDTO userDTO=new UserDTO();
        userDTO.setId(1L);
        Salon salon=salonService.updateSalon(salonDTO,userDTO,salonId);
        SalonDTO salonDTO1= SalonMapper.mapToDTO(salon);
        return ResponseEntity.ok(salonDTO1);


    }
    //  http://localhost:5002/api/salons
    @GetMapping()
    public ResponseEntity<List<SalonDTO>> getSalons() throws Exception {

        List<Salon> salons=salonService.getAllSalons();

List<SalonDTO>salonDTOS=salons.stream().map((salon)->
        {
          SalonDTO salonDTO=SalonMapper.mapToDTO(salon);
          return salonDTO;
        }
        ).toList();
return ResponseEntity.ok(salonDTOS);
    }
    //  http://localhost:5002/api/salons/5
    @GetMapping("/{salonId}")
    public ResponseEntity<SalonDTO> getSalonById(
            @PathVariable Long salonId
    ) throws Exception {

       Salon salon=salonService.getSalonById(salonId);

       SalonDTO salonDTO=SalonMapper.mapToDTO(salon);
       return ResponseEntity.ok(salonDTO);

    }
    //  http://localhost:5002/api/salons/search?city=mumbai
    @GetMapping("/search")
    public ResponseEntity<List<SalonDTO>> searchSalons(
        @RequestParam("city") String city
    ) throws Exception {

        List<Salon> salons=salonService.searchSalonByCity(city);

        List<SalonDTO>salonDTOS=salons.stream().map((salon)->
                {
                    SalonDTO salonDTO=SalonMapper.mapToDTO(salon);
                    return salonDTO;
                }
        ).toList();
        return ResponseEntity.ok(salonDTOS);
    }


    //  http://localhost:5002/api/salons/5
    @GetMapping("/owner")
    public ResponseEntity<SalonDTO> getSalonByOwnerId(
            @PathVariable Long salonId
    ) throws Exception {
        UserDTO userDTO=new UserDTO();
        userDTO.setId(1L);
        Salon salon=salonService.getSalonByOwnerId(userDTO.getId());

        SalonDTO salonDTO=SalonMapper.mapToDTO(salon);
        return ResponseEntity.ok(salonDTO);

    }
}
