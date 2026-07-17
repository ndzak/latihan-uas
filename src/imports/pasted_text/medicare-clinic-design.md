Create a responsive web application design called **“MediCare Clinic & Pharmacy”**, an integrated information system for managing clinic and pharmacy operations.

The application must have a modern, professional, user-friendly, and realistic interface. It should look like a complete healthcare product that is ready to be developed and used by real users.

Use **English** for all interface text, labels, buttons, notifications, and sample data.

# APPLICATION PURPOSE

The application will manage the complete operational process of a clinic and pharmacy, including:

* Patient registration
* Appointment booking
* Queue management
* Doctor schedules
* Medical examinations
* Electronic medical records
* Laboratory examinations
* Electronic prescriptions
* Pharmacy services
* Medicine inventory
* Suppliers and purchasing
* Cashier and payments
* Insurance and healthcare claims
* Reports and analytics
* User roles and permissions
* System settings
* Audit logs

# VISUAL STYLE

Use the following design style:

* Modern, clean, professional, and trustworthy
* Healthcare-oriented visual identity
* White as the primary background color
* Medical blue and turquoise green as primary colors
* Light gray for secondary surfaces
* Red or orange only for warnings, emergencies, expired products, and critical stock
* Rounded cards and input fields
* Soft shadows without excessive visual effects
* Simple and consistent healthcare icons
* Clear visual hierarchy
* Comfortable spacing
* Accessible text contrast
* Consistent components across all screens

Use modern fonts such as:

* Inter
* Poppins
* Plus Jakarta Sans

Create the following screen sizes:

* Desktop frame: 1440 × 1024 pixels
* Mobile frame: 390 × 844 pixels
* Tablet frame: 768 × 1024 pixels

Use Auto Layout, reusable components, component variants, responsive constraints, and a consistent grid system.

# USER ROLES

Create separate dashboards, menus, and permissions for the following users:

1. Patient
2. Doctor
3. Nurse
4. Pharmacist
5. Cashier
6. Registration Officer
7. Laboratory Officer
8. Clinic Manager
9. System Administrator

Each user role must only be able to access the features related to their responsibilities.

# GENERAL APPLICATION PAGES

## 1. Splash Screen

Display:

* MediCare logo
* Clinic and pharmacy illustration
* Tagline: “Integrated Healthcare, Made Simple”
* Loading indicator
* App version information

## 2. Login Page

Display:

* Application logo
* Email or phone number field
* Password field
* Show or hide password button
* “Remember Me” checkbox
* “Sign In” button
* “Forgot Password?” link
* “Register as a Patient” link
* Sign in with Google option
* Privacy and data security information

Create validation states for:

* Empty fields
* Invalid email format
* Incorrect password
* Inactive account
* Locked account
* Expired session
* Login success

## 3. Patient Registration

Create a multi-step registration form.

### Step 1: Personal Information

Include:

* Full name
* National identification number
* Place of birth
* Date of birth
* Gender
* Phone number
* Email address
* Residential address
* City
* Province
* Postal code

### Step 2: Medical Information

Include:

* Blood type
* Drug allergies
* Food allergies
* Medical history
* Chronic conditions
* Current medications
* Emergency contact name
* Emergency contact phone number
* Relationship to emergency contact

### Step 3: Insurance Information

Include:

* Patient type
* General patient
* National healthcare insurance
* Private insurance
* Insurance number
* Insurance provider
* Policy number
* Upload identification card
* Upload insurance card
* Upload referral document

### Step 4: Account Security

Include:

* Password
* Confirm password
* Terms and conditions agreement
* Privacy policy agreement
* Data processing consent

## 4. Forgot Password

Create the following flow:

* Enter email or phone number
* Send OTP code
* OTP verification
* Create a new password
* Confirm new password
* Password successfully updated screen

# SYSTEM ADMINISTRATOR DASHBOARD

## 5. Administrator Dashboard

Use a left sidebar and a top navigation bar.

Sidebar menu:

* Dashboard
* Patients
* Doctors
* Employees
* Departments
* Doctor Schedules
* Appointments
* Queue Management
* Medical Examinations
* Medical Records
* Laboratory
* Prescriptions
* Pharmacy
* Medicines
* Inventory
* Suppliers
* Purchases
* Transactions
* Payments
* Insurance
* Reports
* Users
* Roles and Permissions
* Notifications
* System Settings
* Audit Logs
* Help Center
* Logout

### Main Statistics

Display statistic cards for:

* Total patients today
* New patients
* Returning patients
* Patients currently waiting
* Active doctors
* Completed examinations
* Pending laboratory tests
* Prescriptions awaiting processing
* Pharmacy transactions
* Daily revenue
* Monthly revenue
* Critical medicine stock
* Medicines approaching expiration

### Charts

Create:

* Daily patient visit chart
* Weekly and monthly patient trend
* Clinic and pharmacy revenue chart
* Patient distribution by department
* New versus returning patient chart
* Payment method distribution
* Most prescribed medicines
* Best-selling medicines
* Doctor performance chart
* Patient satisfaction chart

### Additional Information

Display:

* Today’s doctor schedules
* Latest queue information
* Recent transactions
* Recent user activities
* Critical stock warnings
* Medicine expiration warnings
* Pending approval requests
* System notifications

Add filters for:

* Today
* Yesterday
* This week
* This month
* This year
* Custom date range

# PATIENT MANAGEMENT

## 6. Patient List

Display patients in a data table.

Columns:

* Medical record number
* Patient name
* National identification number
* Gender
* Age
* Phone number
* Patient category
* Insurance provider
* Last visit
* Account status
* Actions

Features:

* Search
* Advanced filters
* Filter by gender
* Filter by patient category
* Filter by insurance provider
* Filter by account status
* Pagination
* Sortable columns
* Export to Excel
* Export to PDF
* Print
* Add patient
* View details
* Edit patient
* Deactivate account
* Merge duplicate patient records

## 7. Patient Details

Use tabs for:

* Overview
* Personal Information
* Medical History
* Visit History
* Medical Records
* Prescriptions
* Laboratory Results
* Payments
* Insurance
* Documents
* Notes

Display:

* Patient photograph
* Medical record number
* Patient identity
* Contact information
* Insurance information
* Allergies
* Chronic conditions
* Current medications
* Emergency contact
* Visit timeline
* Important medical alerts

# REGISTRATION, APPOINTMENT, AND QUEUE MANAGEMENT

## 8. Patient Visit Registration

Create a form containing:

* New or existing patient
* Patient search
* Department selection
* Doctor selection
* Visit date
* Available schedule
* Visit type
* Main complaint
* Payment method
* General, insurance, or national healthcare coverage
* Referral document upload
* Additional notes

Display estimated queue time before registration is confirmed.

## 9. Appointment Management

Display appointments using:

* Calendar view
* Daily view
* Weekly view
* Monthly view
* List view

Appointment information:

* Patient name
* Doctor name
* Department
* Appointment date
* Appointment time
* Queue number
* Visit type
* Payment type
* Appointment status

Statuses:

* Scheduled
* Confirmed
* Checked in
* Waiting
* In examination
* Completed
* Cancelled
* No-show
* Rescheduled

Features:

* Create appointment
* Edit appointment
* Reschedule
* Cancel appointment
* Send appointment reminder
* Check in patient
* Generate queue number

## 10. Queue Dashboard

Display:

* Current queue number
* Next queue number
* Patient name
* Department
* Doctor name
* Estimated waiting time
* Number of patients waiting
* Queue status

Queue statuses:

* Waiting
* Called
* Recalled
* In examination
* Completed
* Skipped
* Cancelled

Actions:

* Call patient
* Recall patient
* Skip patient
* Start examination
* Complete examination
* Transfer queue
* Cancel queue

Create a separate queue display screen for televisions in the waiting room.

The television display should show:

* Current queue number
* Next queue numbers
* Room number
* Doctor name
* Department
* Clinic announcements
* Current date and time

# DOCTOR AND EMPLOYEE MANAGEMENT

## 11. Doctor List

Display:

* Doctor photograph
* Doctor name
* Medical license number
* Specialization
* Department
* Practice schedule
* Patient quota
* Availability status
* Actions

## 12. Doctor Details

Display:

* Doctor profile
* Education
* Certifications
* Specialization
* Registration number
* Medical license number
* Practice schedules
* Number of patients treated
* Service history
* Patient ratings
* Availability status
* Upcoming leave

## 13. Doctor Schedule Management

Use weekly and monthly calendar views.

Features:

* Add doctor schedule
* Set start and end time
* Set patient quota
* Set consultation duration
* Set recurring schedules
* Set holidays
* Set doctor leave
* Assign replacement doctor
* Detect schedule conflicts
* Close unavailable schedules
* Open additional schedules

## 14. Employee Management

Manage:

* Nurses
* Pharmacists
* Cashiers
* Registration officers
* Laboratory officers
* Clinic managers
* Administrative employees

Employee details:

* Employee ID
* Full name
* Role
* Department
* Contact information
* Employment status
* Work schedule
* Account status
* Last login

# DOCTOR DASHBOARD AND MEDICAL EXAMINATION

## 15. Doctor Dashboard

Display:

* Today’s practice schedule
* Total patients waiting
* Completed patients
* Cancelled visits
* Current patient
* Patient queue list
* Recent patient history
* Pending laboratory results
* Follow-up reminders
* New consultations
* Important medical alerts

Actions:

* Call next patient
* Start examination
* View patient history
* Write prescription
* Request laboratory test
* Create referral
* Complete visit

## 16. Patient Examination Page

Use a two-column layout.

### Left Column: Patient Information

Display:

* Patient identity
* Medical record number
* Age
* Gender
* Blood type
* Allergies
* Chronic diseases
* Current medications
* Previous visits
* Previous diagnoses
* Recent laboratory results
* Important medical warnings

### Right Column: Examination Form

#### Main Complaint

Include:

* Main complaint
* Present illness history
* Duration of symptoms
* Pain scale
* Additional symptoms

#### Vital Signs

Include:

* Blood pressure
* Body temperature
* Weight
* Height
* Heart rate
* Respiratory rate
* Oxygen saturation
* Blood glucose
* Automatically calculated BMI

#### Medical Examination

Include:

* Medical interview
* Physical examination
* Primary diagnosis
* Secondary diagnosis
* ICD-10 code
* Medical procedure
* Doctor notes
* Treatment plan
* Follow-up instructions
* Next control date

Actions:

* Save draft
* Save examination
* Create prescription
* Request laboratory examination
* Create medical referral
* Upload supporting documents
* Print medical summary
* Complete examination

## 17. Electronic Medical Records

Display medical records using a timeline.

Each record should contain:

* Date and time
* Doctor
* Department
* Main complaint
* Vital signs
* Diagnosis
* Medical procedure
* Prescription
* Laboratory results
* Doctor notes
* Uploaded documents

Features:

* Filter by date
* Filter by doctor
* Filter by department
* Search diagnosis
* Print medical record
* Export to PDF
* Access restrictions
* Record modification history
* Digital signature verification

# LABORATORY MANAGEMENT

## 18. Laboratory Dashboard

Display:

* New laboratory requests
* Samples awaiting collection
* Tests in progress
* Tests awaiting validation
* Completed laboratory tests
* Urgent requests
* Abnormal results
* Daily test volume

## 19. Laboratory Test Request

Display:

* Patient name
* Medical record number
* Requesting doctor
* Requested tests
* Priority
* Clinical diagnosis
* Clinical notes
* Request date
* Sample type
* Test status

Priorities:

* Normal
* Urgent
* Emergency

## 20. Sample Collection

Include:

* Sample barcode
* Sample type
* Collection date and time
* Collector name
* Sample condition
* Storage requirements
* Collection notes

## 21. Laboratory Result Entry

Display a table containing:

* Test parameter
* Result
* Unit
* Normal range
* Low, normal, high, or critical indicator
* Notes

Features:

* Upload PDF result
* Upload supporting image
* Laboratory officer verification
* Doctor validation
* Digital signature
* Print result
* Send result to patient portal

Statuses:

* Requested
* Sample collected
* Processing
* Awaiting verification
* Completed
* Validated
* Cancelled

# ELECTRONIC PRESCRIPTION

## 22. Prescription Creation

Create an electronic prescription form.

Fields:

* Medicine name
* Generic name
* Dosage form
* Medicine strength
* Quantity
* Dosage
* Frequency
* Duration
* Route of administration
* Before or after meals
* Usage instructions
* Doctor notes
* Compound or non-compound prescription

Features:

* Automatic medicine search
* Current stock information
* Patient allergy warning
* Drug interaction warning
* Duplicate medicine warning
* Dosage warning
* Generic medicine alternatives
* Save prescription template
* Doctor digital signature

# PHARMACY MANAGEMENT

## 23. Pharmacist Dashboard

Display:

* New prescriptions
* Prescriptions awaiting verification
* Prescriptions in preparation
* Prescriptions ready for pickup
* Completed prescriptions
* Prescriptions with unavailable medicines
* Critical medicine stock
* Medicines approaching expiration
* Daily pharmacy sales
* Pending medicine returns

## 24. Prescription Processing

Create the following workflow:

1. Prescription received
2. Prescription verification
3. Stock availability check
4. Medicine preparation
5. Label printing
6. Final verification
7. Ready for pickup
8. Medicine delivered

Display:

* Patient information
* Doctor information
* Prescription number
* Medicine list
* Dosage
* Quantity
* Price
* Available stock
* Medicine batch
* Expiration date
* Replacement medicine option
* Pharmacist notes
* Payment status

Actions:

* Verify prescription
* Contact doctor
* Replace medicine
* Print medicine label
* Print prescription
* Mark as ready
* Confirm medicine delivery
* Cancel prescription

# MEDICINE MANAGEMENT

## 25. Medicine List

Display a data table with:

* Medicine code
* Barcode
* Medicine name
* Generic name
* Category
* Dosage form
* Strength
* Unit
* Purchase price
* Selling price
* Current stock
* Minimum stock
* Storage location
* Nearest expiration date
* Status
* Actions

Features:

* Search
* Category filter
* Stock status filter
* Expiration filter
* Barcode scanner
* Add medicine
* Edit medicine
* Import from Excel
* Export to Excel
* Export to PDF
* Print barcode labels

## 26. Medicine Details

Use tabs for:

* General Information
* Stock
* Batches
* Stock Movement
* Suppliers
* Sales History
* Adjustments

Display:

* Medicine image
* Active ingredients
* Indications
* Contraindications
* Side effects
* Storage instructions
* Registration number
* Manufacturer
* Supplier
* Batch information
* Expiration dates
* Stock history

## 27. Inventory Management

Display:

* Current stock
* Available stock
* Reserved stock
* Ordered stock
* Damaged stock
* Expired stock
* Minimum stock
* Inventory value

Features:

* Stock in
* Stock out
* Stock transfer
* Stock adjustment
* Stock opname
* Medicine return
* Damaged medicine recording
* Expired medicine disposal
* Stock movement history
* FEFO inventory method

FEFO means medicines with the nearest expiration date must be used first.

## 28. Stock Opname

Display:

* Medicine name
* System stock
* Physical stock
* Difference
* Adjustment reason
* Officer name
* Verification status

Statuses:

* Draft
* In progress
* Awaiting approval
* Approved
* Rejected
* Completed

# SUPPLIERS AND PURCHASING

## 29. Supplier List

Display:

* Company name
* Contact person
* Phone number
* Email
* Address
* License number
* Cooperation status
* Total purchases
* Last transaction
* Actions

## 30. Purchase Order

Create a purchase order form containing:

* Purchase order number
* Supplier
* Order date
* Estimated delivery date
* Medicine list
* Quantity
* Purchase price
* Discount
* Tax
* Total
* Notes

Statuses:

* Draft
* Submitted
* Approved
* Ordered
* Partially received
* Completed
* Cancelled

## 31. Medicine Receiving

Display:

* Purchase order number
* Supplier
* Invoice number
* Medicine
* Batch number
* Production date
* Expiration date
* Ordered quantity
* Received quantity
* Difference
* Product condition

Features:

* Upload invoice
* Upload delivery note
* Upload product photo
* Confirm received stock
* Reject damaged products

## 32. Supplier Return

Include:

* Supplier
* Medicine
* Batch number
* Quantity
* Return reason
* Return date
* Supporting documents
* Refund or replacement option
* Return status

# CASHIER AND PAYMENT MANAGEMENT

## 33. Cashier Dashboard

Display:

* Pending bills
* Paid bills
* Daily revenue
* Cash transactions
* Debit and credit card transactions
* QR payments
* Insurance transactions
* Refunds
* Cash register balance

## 34. Payment Page

Display a complete billing breakdown:

* Registration fee
* Consultation fee
* Medical procedure fee
* Laboratory fee
* Medicine fee
* Administrative fee
* Discount
* Tax
* Insurance coverage
* Total payment
* Remaining balance

Payment methods:

* Cash
* Debit card
* Credit card
* QR payment
* Bank transfer
* National healthcare insurance
* Private insurance

Features:

* Enter amount received
* Automatic change calculation
* Split payment
* Partial payment
* Insurance coverage calculation
* Print receipt
* Send receipt through email
* Send receipt through WhatsApp
* Download receipt as PDF

Payment statuses:

* Unpaid
* Partially paid
* Paid
* Covered by insurance
* Awaiting claim
* Refunded
* Cancelled

## 35. Cash Register Closing

Display:

* Opening balance
* Cash income
* Non-cash income
* Refunds
* Expected closing balance
* Actual closing balance
* Difference
* Cashier notes
* Supervisor approval

# INSURANCE AND CLAIMS

## 36. Insurance Management

Display:

* Insurance provider
* Policy number
* Patient name
* Visit number
* Coverage type
* Covered amount
* Patient responsibility
* Claim status

Claim statuses:

* Draft
* Submitted
* Under review
* Approved
* Partially approved
* Rejected
* Paid

Features:

* Upload claim documents
* Verify patient coverage
* Submit claim
* Track claim status
* Record rejection reason
* Resubmit claim

# PATIENT PORTAL

## 37. Patient Dashboard

Display:

* Personalized greeting
* Upcoming appointment
* Current queue number
* Estimated waiting time
* Active prescriptions
* Medication schedule
* Outstanding bills
* Latest laboratory results
* Follow-up reminder
* Health articles
* Important notifications

Patient menu:

* Home
* Book Appointment
* My Appointments
* My Queue
* Visit History
* Medical Records
* My Prescriptions
* Laboratory Results
* Payments
* Insurance
* Notifications
* Profile
* Help Center

## 38. Book a Doctor Appointment

Create a step-by-step process:

1. Select department
2. Select doctor
3. Select date
4. Select available schedule
5. Enter complaint
6. Select payment method
7. Review appointment
8. Confirm appointment

Display:

* Doctor profile
* Specialization
* Available schedules
* Consultation fee
* Patient rating
* Estimated queue
* Available patient quota

## 39. Patient Queue

Display:

* Patient queue number
* Current queue number
* Remaining patients
* Estimated waiting time
* Doctor name
* Department
* Examination room
* Queue status

Send notifications when:

* Five patients remain
* Three patients remain
* One patient remains
* Patient will be called soon
* Doctor is delayed
* Appointment is cancelled
* Examination room changes

## 40. Patient Medical Records

Display:

* Visit date
* Doctor
* Department
* Complaint
* Diagnosis
* Medical procedure
* Prescription
* Laboratory result
* Follow-up instructions

Protect sensitive medical information with an additional confirmation step.

## 41. Prescription and Medication Schedule

Display:

* Medicine name
* Medicine image
* Dosage
* Quantity
* Medication time
* Before or after meals
* Duration
* Doctor instructions
* Pickup status

Provide medication reminder actions:

* Taken
* Skip
* Remind me later
* Report side effect

## 42. Patient Payment History

Display:

* Invoice number
* Visit date
* Service details
* Total amount
* Insurance coverage
* Payment method
* Payment status
* Receipt download button

# REPORTS AND ANALYTICS

## 43. Reports Dashboard

Provide the following reports:

* Patient visit report
* New patient report
* Returning patient report
* Revenue report
* Doctor performance report
* Department performance report
* Medical procedure report
* Laboratory report
* Prescription report
* Medicine sales report
* Medicine stock report
* Purchase report
* Supplier report
* Expired medicine report
* Critical stock report
* Insurance claim report
* Cashier report
* Simple profit and loss report

Filters:

* Date range
* Doctor
* Department
* Patient type
* Payment method
* Insurance provider
* Medicine category
* Supplier
* Transaction status

Display:

* Summary cards
* Charts
* Data tables
* Comparisons
* Trends
* Download buttons

Export options:

* Excel
* PDF
* CSV
* Print

# NOTIFICATION CENTER

## 44. Notification Center

Group notifications into:

* Queue
* Appointment
* Doctor schedule
* Prescription
* Medicine inventory
* Payment
* Laboratory
* Insurance
* System

Each notification should include:

* Icon
* Title
* Description
* Date and time
* Read or unread status
* Priority
* View details button

Notification priority levels:

* Information
* Normal
* Important
* Urgent
* Critical

# SYSTEM SETTINGS

## 45. Clinic Settings

Create a settings form containing:

* Clinic name
* Clinic logo
* Address
* Phone number
* Email address
* Website
* Operating hours
* Legal information
* Clinic license number
* Tax information
* Bank account information
* Receipt template
* Prescription template
* Medical record numbering format
* Transaction numbering format
* Queue numbering format
* Default language
* Time zone
* Currency

## 46. User and Role Management

Display:

* User list
* Employee name
* Role
* Department
* Account status
* Last login
* Device information
* Actions

Create detailed permissions for:

* View data
* Create data
* Edit data
* Delete data
* Approve transactions
* Print documents
* Export reports
* Access medical records
* Access financial information
* Manage system settings
* View audit logs

## 47. Audit Logs

Display:

* User name
* Activity
* Module
* Record affected
* Previous value
* New value
* Date and time
* IP address
* Device
* Activity status

Provide filters for:

* User
* Module
* Activity
* Date
* Status

# HELP CENTER

## 48. Help and Support

Display:

* Frequently asked questions
* User guide
* Video tutorials
* Contact support
* Report a problem
* Live chat
* System status
* Privacy policy
* Terms and conditions

# DESIGN SYSTEM

Create a dedicated Design System page containing:

* Primary logo
* Secondary logo
* Monochrome logo
* Color palette
* Typography system
* Grid system
* Spacing system
* Icon library
* Illustration style

Create reusable components for:

* Primary button
* Secondary button
* Outline button
* Danger button
* Success button
* Disabled button
* Icon button
* Text input
* Number input
* Password input
* Textarea
* Search field
* Dropdown
* Multi-select
* Date picker
* Time picker
* Date range picker
* Checkbox
* Radio button
* Toggle switch
* File upload
* Image upload
* Badge
* Status label
* Alert
* Toast notification
* Confirmation modal
* Form modal
* Tooltip
* Tabs
* Breadcrumb
* Pagination
* Data table
* Empty state
* Loading state
* Skeleton loading
* Error state
* Success state
* Statistic card
* Doctor card
* Medicine card
* Patient card
* Appointment card
* Queue card
* Chart
* Calendar
* Timeline
* Sidebar
* Top navigation
* Mobile bottom navigation
* User profile menu

Create component variants for:

* Default
* Hover
* Focus
* Active
* Disabled
* Loading
* Error
* Success

# INTERACTIVE PROTOTYPE

Create clickable prototypes for the following user flows.

## Patient Flow

Login → Patient Dashboard → Book Appointment → Select Department → Select Doctor → Select Schedule → Enter Complaint → Select Payment Method → Confirm Appointment → Receive Queue Number → Track Queue → Complete Examination → View Prescription → Make Payment → View Visit History.

## Doctor Flow

Login → Doctor Dashboard → Select Patient → Start Examination → Review Medical History → Enter Vital Signs → Create Diagnosis → Request Laboratory Test → Create Prescription → Save Medical Record → Complete Visit.

## Pharmacist Flow

Login → Pharmacist Dashboard → Select New Prescription → Verify Prescription → Check Stock → Prepare Medicine → Print Label → Final Verification → Mark as Ready → Deliver Medicine.

## Cashier Flow

Login → Cashier Dashboard → Select Pending Bill → Review Billing Details → Select Payment Method → Confirm Payment → Print Receipt.

## Laboratory Officer Flow

Login → Laboratory Dashboard → Select Laboratory Request → Collect Sample → Enter Results → Verify Results → Send Results to Doctor.

## Administrator Flow

Login → Administrator Dashboard → Manage Users → Manage Doctors → Manage Schedules → Manage Medicines → Manage Inventory → Review Transactions → View Reports.

# SYSTEM STATES

Create realistic designs for the following states:

* Normal data
* Empty state
* Loading state
* Skeleton loading
* Failed data loading
* No search results
* Form successfully saved
* Form failed to save
* Delete confirmation
* Session expired
* Access denied
* Account locked
* Medicine out of stock
* Critical medicine stock
* Medicine approaching expiration
* Medicine expired
* Doctor unavailable
* Schedule fully booked
* Appointment cancelled
* Payment failed
* Prescription contains a drug interaction
* Patient has a medicine allergy
* Laboratory result is critical
* Internet connection lost
* Server maintenance
* Unauthorized access attempt

# SAMPLE DATA

Use realistic sample data in English, including:

* Patient names
* Doctor names
* Medicine names
* Departments
* Diagnoses
* Prescriptions
* Laboratory tests
* Supplier information
* Transactions
* Payments
* Insurance providers

Example departments:

* General Practice
* Pediatrics
* Internal Medicine
* Dental Clinic
* Obstetrics and Gynecology
* Dermatology
* Cardiology
* Ophthalmology

Example medicine categories:

* Antibiotics
* Analgesics
* Antipyretics
* Vitamins
* Antihypertensives
* Diabetes Medicines
* Respiratory Medicines
* Digestive Medicines

# FINAL REQUIREMENTS

Create at least:

* 45 desktop screens
* 20 mobile screens
* 10 tablet screens
* One complete Design System page
* One clickable prototype for every major user role

Ensure all screens are:

* Visually consistent
* Easy to understand
* Responsive
* Accessible
* Realistic
* Professionally organized
* Ready for developer handoff
* Ready for usability testing
* Ready to be presented to clients, lecturers, developers, or potential users

Use Auto Layout throughout the design.

Use reusable components and variants instead of creating repeated independent elements.

Create clear layer names and page structures.

Organize the Figma file into the following pages:

1. Cover
2. Design System
3. Authentication
4. Administrator
5. Registration and Queue
6. Doctors and Employees
7. Medical Examination
8. Medical Records
9. Laboratory
10. Prescriptions
11. Pharmacy
12. Medicines and Inventory
13. Suppliers and Purchasing
14. Cashier and Payments
15. Insurance
16. Patient Portal
17. Reports
18. Settings
19. Mobile Screens
20. Prototypes

Add short annotations explaining the purpose of each major screen and important component.

The final design should look like a real healthcare platform that could be developed and deployed, not a simple student dashboard or a basic concept design.
