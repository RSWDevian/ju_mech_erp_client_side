"use client";

import { useState } from "react";
import {
  TextField,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Divider,
  Box,
} from "@mui/material";

export default function EnrollmentDetailsForm({
  onChange,
  formData,
  handleChange,
}) {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Enrollment Details
      </Typography>
      <Divider className="mb-4" />

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            fullWidth
            label="Roll Number"
            name="rollNumber"
            value={formData.rollNumber}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            required
            fullWidth
            label="Section"
            name="section"
            value={formData.section}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl fullWidth required>
            <InputLabel>Programme</InputLabel>
            <Select
              name="programme"
              value={formData.programme}
              onChange={handleChange}
              label="Programme"
            >
              <MenuItem value="be">BE</MenuItem>
              <MenuItem value="me">ME</MenuItem>
              <MenuItem value="phd">PhD</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControlLabel
            control={
              <Checkbox
                name="isLateralEntry"
                checked={formData.isLateralEntry}
                onChange={handleChange}
              />
            }
            label="Lateral Entry"
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            required
            fullWidth
            label="Year of Admission"
            name="admissionYear"
            type="number"
            value={formData.admissionYear}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            required
            fullWidth
            label="Current Semester"
            name="currentSemester"
            type="number"
            value={formData.currentSemester}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            required
            fullWidth
            label="Current Year"
            name="currentYear"
            type="number"
            value={formData.currentYear}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            required
            fullWidth
            label="Expected Graduation Year"
            name="expectedGraduationYear"
            type="number"
            value={formData.expectedGraduationYear}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            required
            fullWidth
            label="Registration Number"
            name="registrationNumber"
            value={formData.registrationNumber}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            required
            fullWidth
            label="Registration Year"
            name="registrationYear"
            type="number"
            value={formData.registrationYear}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            required
            fullWidth
            label="Name of Mentor"
            name="mentorName"
            value={formData.mentorName}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControlLabel
            control={
              <Checkbox
                name="hasScholarship"
                checked={formData.hasScholarship}
                onChange={handleChange}
              />
            }
            label="Scholarship/Freeship Programme"
          />
        </Grid>

        {formData.hasScholarship && (
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Scholarship Details"
              name="scholarshipDetails"
              multiline
              rows={3}
              value={formData.scholarshipDetails}
              onChange={handleChange}
            />
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
