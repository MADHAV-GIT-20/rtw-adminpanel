package com.rtw.model;

import jakarta.persistence.*;
import lombok.Builder;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="user_master")
@Builder
public class UserMaster implements UserDetails {

    public UserMaster() {
    }

    public UserMaster(int userSeqNo, int userId, String userName, String password, String firstName, String lastName, Date dob, String email, String phoneNo, String mobileNumber, boolean activeYN, String residentialAddress, String address2, String pinCode, String country, String stateProvince, String city) {
        this.userSeqNo = userSeqNo;
        this.userId = userId;
        this.userName = userName;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.email = email;
        this.phoneNo = phoneNo;
        this.mobileNumber = mobileNumber;
        this.activeYN = activeYN;
        this.residentialAddress = residentialAddress;
        this.address2 = address2;
        this.pinCode = pinCode;
        this.country = country;
        this.stateProvince = stateProvince;
        this.city = city;
    }

    private int userSeqNo;

    @Id
    @Column(name="user_id")
    @GeneratedValue()
    private int userId;

    private String userName;

    private String password;

    private String firstName;

    private String lastName;

    private Date dob;

    private String email;

    private String phoneNo;

    private String mobileNumber;

    private boolean activeYN;

    private String residentialAddress;
    private String address2;
    private String pinCode;
    private String country;
    private String stateProvince;
    private String city;


    public int getUserSeqNo() {
        return userSeqNo;
    }

    public void setUserSeqNo(int userSeqNo) {
        this.userSeqNo = userSeqNo;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("USER"));
    }

    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return userName;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public boolean isActiveYN() {
        return activeYN;
    }

    public void setActiveYN(boolean activeYN) {
        this.activeYN = activeYN;
    }

    public String getResidentialAddress() {
        return residentialAddress;
    }

    public void setResidentialAddress(String residentialAddress) {
        this.residentialAddress = residentialAddress;
    }

    public String getAddress2() {
        return address2;
    }

    public void setAddress2(String address2) {
        this.address2 = address2;
    }

    public String getPinCode() {
        return pinCode;
    }

    public void setPinCode(String pinCode) {
        this.pinCode = pinCode;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getStateProvince() {
        return stateProvince;
    }

    public void setStateProvince(String stateProvince) {
        this.stateProvince = stateProvince;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }
}
