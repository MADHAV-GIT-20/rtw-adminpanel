package com.rtw.repository;

import com.rtw.model.UserGroup;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserGroupRepository extends JpaRepository<UserGroup, String> {

//    Optional<UserGroup> findByEmail(String email);

}
