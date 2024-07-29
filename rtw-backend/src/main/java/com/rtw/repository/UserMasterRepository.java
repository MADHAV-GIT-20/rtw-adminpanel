package com.rtw.repository;

import com.rtw.model.UserMaster;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserMasterRepository extends JpaRepository<UserMaster, Integer> {

        Optional<UserMaster> findByEmail(String email);

}
