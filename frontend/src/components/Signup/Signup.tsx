import React, { useState } from 'react';
import {
  Button,
  Grid,
  Stack,
  TextInput,
  Title,
  Box,
  Space,
  Anchor,
  Select,
  BackgroundImage,
} from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Signup = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    firstname: '',
    lastname: '',
    mobileNumber: '',
    email: '',
    residentialAddress: '',
    address2: '',
    phoneNo: '',
    pinCode: '',
    country: '',
    stateProvince: '',
    city: '',
    password: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Inside handleInutChange');
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string | null) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value || '',
    }));
  };

  const handleSignup = async () => {
    // event.preventDefault;
    await axios.post('http://localhost:8181/api/v1/auth/register', formValues);

    // Handle signup logic here
    console.log('Form Values:', formValues);
    navigate('/');
  };

  return (
    <Box
      style={{
        height: '150vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(bg.jpg})',
        backgroundSize: 'cover',
      }}
    >
      <Stack
        align="center"
        justify="center"
        style={{
          padding: '5rem',
          borderRadius: '8px',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          width: '100%',
          maxWidth: '1000px',
        }}
      >
        <Title order={2}>Sign Up</Title>
        <Space h="md" />
        <Grid gutter="lg">
          <Grid.Col span={6}>
            <TextInput
              label="First Name"
              placeholder="Enter your first name"
              name="firstname"
              value={formValues.firstname}
              onChange={handleInputChange}
              required
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label="Last Name"
              placeholder="Enter your last name"
              name="lastname"
              value={formValues.lastname}
              onChange={handleInputChange}
              required
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label="Mobile Number"
              placeholder="Enter your mobile number"
              name="mobileNumber"
              value={formValues.mobileNumber}
              onChange={handleInputChange}
              required
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label="Email"
              placeholder="Enter your email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              required
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <TextInput
              label="Residential Address"
              placeholder="Enter your residential address"
              name="residentialAddress"
              value={formValues.residentialAddress}
              onChange={handleInputChange}
              required
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label="Address2"
              placeholder="Enter your address 2"
              name="address2"
              value={formValues.address2}
              onChange={handleInputChange}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label="Phone Number"
              placeholder="Enter your phone number"
              name="phoneNo"
              value={formValues.phoneNo}
              onChange={handleInputChange}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label="Pin Code"
              placeholder="Enter your pin code"
              name="pinCode"
              value={formValues.pinCode}
              onChange={handleInputChange}
              required
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Select
              label="Country"
              placeholder="Enter your country"
              searchable
              clearable={false}
              name="country"
              value={formValues.country}
              onChange={(value) => handleSelectChange('country', value)}
              data={[
                { value: 'India', label: 'India' },
                // Add more countries as needed
              ]}
              required
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Select
              label="State/Province"
              placeholder="Enter your state/province"
              searchable
              clearable={false}
              name="stateProvince"
              value={formValues.stateProvince}
              onChange={(value) => handleSelectChange('stateProvince', value)}
              data={[
                { value: 'Andhra Pradesh', label: 'Andhra Pradesh' },
                { value: 'Arunachal Pradesh', label: 'Arunachal Pradesh' },
                { value: 'Assam', label: 'Assam' },
                { value: 'Bihar', label: 'Bihar' },
                { value: 'Chhattisgarh', label: 'Chhattisgarh' },
                { value: 'Goa', label: 'Goa' },
                { value: 'Gujarat', label: 'Gujarat' },
                { value: 'Haryana', label: 'Haryana' },
                { value: 'Himachal Pradesh', label: 'Himachal Pradesh' },
                { value: 'Jharkhand', label: 'Jharkhand' },
                { value: 'Karnataka', label: 'Karnataka' },
                { value: 'Kerala', label: 'Kerala' },
                { value: 'Madhya Pradesh', label: 'Madhya Pradesh' },
                { value: 'Maharashtra', label: 'Maharashtra' },
                { value: 'Manipur', label: 'Manipur' },
                { value: 'Meghalaya', label: 'Meghalaya' },
                { value: 'Mizoram', label: 'Mizoram' },
                { value: 'Nagaland', label: 'Nagaland' },
                { value: 'Odisha', label: 'Odisha' },
                { value: 'Punjab', label: 'Punjab' },
                { value: 'Rajasthan', label: 'Rajasthan' },
                { value: 'Sikkim', label: 'Sikkim' },
                { value: 'Tamil Nadu', label: 'Tamil Nadu' },
                { value: 'Telangana', label: 'Telangana' },
                { value: 'Tripura', label: 'Tripura' },
                { value: 'Uttar Pradesh', label: 'Uttar Pradesh' },
                { value: 'Uttarakhand', label: 'Uttarakhand' },
                { value: 'West Bengal', label: 'West Bengal' },
              ]}
              required
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label="City"
              placeholder="Enter your city"
              name="city"
              value={formValues.city}
              onChange={handleInputChange}
              required
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label="Password"
              placeholder="Enter your password"
              name="password"
              value={formValues.password}
              onChange={handleInputChange}
              required
            />
          </Grid.Col>
        </Grid>
        <Space h="lg" />
        <Button onClick={handleSignup}>Sign Up</Button>
        <Space h="md" />
        <Anchor href="/">Already have an account? Login</Anchor>
      </Stack>
    </Box>
  );
};