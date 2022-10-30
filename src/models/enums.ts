export enum Gender {
  Male = 'Male',
  Female = 'Female',
}

export enum EducationType {
  PreSchool = 'PreSchool',
  School = 'School',
  Course = 'Course'
}
export enum UserType {
  Teacher = "Teacher",
  Student = "Student",
  Employee = "Employee"
}

export enum UserStatus {
  Active = "Active",
  Passive = "Passive"
}

export enum Type {
  Identity = "Identity",
  CV = "CV",
  Photo = "Photo",
  Certificate = "Certificate",
  General = "General"
}

export enum Permissions {

  ASSING_LESSON_CLASS = "ASSING_LESSON_CLASS",

  SHOW_STUDENTS = "SHOW_STUDENTS",

  ADD_STUDENTS = "ADD_STUDENTS",

  UPDATE_STUDENTS = "UPDATE_STUDENTS",

  DELETE_STUDENTS = "DELETE_STUDENTS",

  SHOW_STU_EVALUATIONS = "SHOW_STU_EVALUATIONS",

  ADD_STU_EVALUATIONS = "ADD_STU_EVALUATIONS",

  UPDATE_STU_EVALUATIONS = "UPDATE_STU_EVALUATIONS",

  DELETE_STU_EVALUATIONS = "DELETE_STU_EVALUATIONS",

  SHOW_INSTALLMENTS = "SHOW_INSTALLMENTS",

  ADD_INSTALLMENTS = "ADD_INSTALLMENTS",

  UPDATE_INSTALLMENTS = "UPDATE_INSTALLMENTS",

  DELETE_INSTALLMENTS = "DELETE_INSTALLMENTS",

  SHOW_TEACHERS = "SHOW_TEACHERS",

  ADD_TEACHERS = "ADD_TEACHERS",
  
  UPDATE_TEACHERS = "UPDATE_TEACHERS",
  
  DELETE_TEACHERS = "DELETE_TEACHERS"
}