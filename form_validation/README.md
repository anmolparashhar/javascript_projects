# Enhanced Form Validation

## Overview
This project showcases a fully functional, client-side **Registration Form** with real-time input validation, error handling, and local storage auto-save functionality. The form ensures that users input valid data before submission and provides visual feedback for errors or successful inputs.

## Features
### 1. Real-Time Input Validation
- **Username**: Requires at least 3 characters (letters, numbers, or underscores).
- **Email**: Checks for a valid email format.
- **Password**: Requires at least 8 characters.
- **Confirm Password**: Ensures passwords match.

### 2. Error and Success Indicators
- Inputs with errors show a descriptive message.
- Successfully validated fields are highlighted visually.

### 3. Local Storage Auto-Save
- Automatically saves form data to local storage on input changes.
- Restores saved form data when the page reloads.

### 4. Form Submission Handling
- Prevents submission if validation fails.
- Clears form and local storage after successful submission.

## Installation
1. Clone or download the repository.
2. Open the `index.html` file in any browser.

## Usage
1. Enter values into the form fields:
   - Username
   - Email
   - Password
   - Confirm Password
2. The form provides instant feedback for errors or successful input validation.
3. On successful submission:
   - An alert is displayed.
   - The form is reset, and local storage is cleared.
4. If you reload the page, previously entered data will be restored from local storage.

## Scripts
git Contains the logic for:
- Field validation (username, email, password, confirm password).
- Real-time error and success feedback.
- Saving and restoring form data to/from local storage.
- Preventing form submission if validation fails.

## Customization
1. **Validation Rules**:
   - Modify the regex for username or email validation.
   - Adjust the minimum password length in `validatePassword()`.

2. **Styling**:
   - Update the `style.css` file to customize the design.

3. **Local Storage**:
   - Extend or disable the auto-save functionality in the `form.addEventListener("input", ...)` block.

## License
This project is open source and free to use for educational and personal purposes.
