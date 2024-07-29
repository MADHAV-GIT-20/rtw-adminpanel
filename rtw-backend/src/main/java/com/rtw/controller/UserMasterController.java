package com.rtw.controller;

import com.rtw.model.UserMaster;
import com.rtw.repository.UserMasterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("http://localhost:5173")
public class UserMasterController {

    @Autowired
    private UserMasterRepository userMasterRepo;

    @PostMapping("/userMaster")
    public UserMaster saveUserMaster(@RequestBody UserMaster userMaster){

        return userMasterRepo.save(userMaster);
    }

    @GetMapping("/userMaster")
    public List<UserMaster> getUserMaster(){
        return userMasterRepo.findAll();
    }
}
