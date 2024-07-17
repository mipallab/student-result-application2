/**
 *  GPA Calculations
 */
let gpaCal = (mark) => {
  // calculation
  let gpa = null;

  if (mark < 33 && mark >= 0) {
    gpa = 0;
  } else if (mark >= 33 && mark < 40) {
    gpa = 1;
  } else if (mark >= 40 && mark < 50) {
    gpa = 2;
  } else if (mark >= 50 && mark < 60) {
    gpa = 3;
  } else if (mark >= 60 && mark < 70) {
    gpa = 3.5;
  } else if (mark >= 70 && mark < 80) {
    gpa = 4;
  } else if (mark >= 80 && mark <= 100) {
    gpa = 5;
  } else {
    gpa = "INVALID GPA!";
  }

  return gpa;
};

/**
 * Calculate Grade
 */

let gradeCal = (mark) => {
  let grade = null;
  // grade condition
  if (mark < 33 && mark >= 0) {
    grade = "F";
  } else if (mark >= 33 && mark < 40) {
    grade = "D";
  } else if (mark >= 40 && mark < 50) {
    grade = "C";
  } else if (mark >= 50 && mark < 60) {
    grade = "B";
  } else if (mark >= 60 && mark < 70) {
    grade = "A-";
  } else if (mark >= 70 && mark < 80) {
    grade = "A";
  } else if (mark >= 80 && mark <= 100) {
    grade = "A+";
  } else {
    grade = "INVALID GRADE!";
  }

  return grade;
};

/**
 * Final Result
 */
let isPassed = (s1, s2, s3, s4, s5, s6) => {
  if (s1 >= 33 && s2 >= 33 && s3 >= 33 && s4 >= 33 && s5 >= 33 && s6 >= 33) {
    return true;
  } else {
    return false;
  }
};

/**
 * Final GPA
 */
let finalGPA = (s1, s2, s3, s4, s5, s6) => {
  let avg_gpa = null;
  if (isPassed(s1, s2, s3, s4, s5, s6)) {
    let total_gpa =
      gpaCal(s1) +
      gpaCal(s2) +
      gpaCal(s3) +
      gpaCal(s4) +
      gpaCal(s5) +
      gpaCal(s6);

    avg_gpa = total_gpa / 6;
  } else {
    avg_gpa = 0;
  }
  return avg_gpa;
};

/**
 * Final Grade
 */

let finalGrade = (s1, s2, s3, s4, s5, s6) => {
  // define final_gap, fineal_grade
  let final_gpa = finalGPA(s1, s2, s3, s4, s5, s6);
  let final_grade = null;

  // if passed then go OR "F"
  if (isPassed(s1, s2, s3, s4, s5, s6)) {
    // calculate final grade
    if (final_gpa >= 1 && final_gpa < 2) {
      final_grade = "D";
    } else if (final_gpa >= 2 && final_gpa < 3) {
      final_grade = "C";
    } else if (final_gpa >= 3 && final_gpa < 3.5) {
      final_grade = "B";
    } else if (final_gpa >= 3.5 && final_gpa < 4) {
      final_grade = "A-";
    } else if (final_gpa >= 4 && final_gpa < 5) {
      final_grade = "A";
    } else if (final_gpa == 5) {
      final_grade = "Golden A+";
    } else {
      final_grade = "INVALID Final GRADE";
    }
  } else {
    final_grade = "F";
  }

  return final_grade;
};
