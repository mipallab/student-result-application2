std_name.map((item, index) => {
  console.log(`
    
      Monohardi Pilot High School
      ============================================

      Name : ${item}    Roll: ${std_roll[index]}  Registration: ${
    std_reg[index]
  }


      ---------------------------------------------------------
      - sub           - mark |   - gpa |   - grade
      ---------------------------------------------------------
        Bangla           ${sub_bangla[index]}  |     ${gpaCal(
    sub_bangla[index]
  )}   |       ${gradeCal(sub_bangla[index])} 
        English          ${sub_english[index]}  |     ${gpaCal(
    sub_english[index]
  )}   |       ${gradeCal(sub_english[index])} 
        Math             ${sub_math[index]}  |     ${gpaCal(
    sub_math[index]
  )}   |       ${gradeCal(sub_math[index])} 
        sscience         ${sub_sscience[index]}  |     ${gpaCal(
    sub_sscience[index]
  )}   |       ${gradeCal(sub_sscience[index])} 
        science          ${sub_science[index]}  |     ${gpaCal(
    sub_science[index]
  )}   |       ${gradeCal(sub_science[index])} 
        Religion         ${sub_religion[index]}  |     ${gpaCal(
    sub_religion[index]
  )}   |       ${gradeCal(sub_religion[index])} 


        Final Result: ${
          isPassed(
            sub_bangla[index],
            sub_english[index],
            sub_math[index],
            sub_sscience[index],
            sub_science[index],
            sub_religion[index]
          )
            ? "Passed :)"
            : "Fail :("
        }

      

        Final GPA: ${finalGPA(
          sub_bangla[index],
          sub_english[index],
          sub_math[index],
          sub_sscience[index],
          sub_science[index],
          sub_religion[index]
        ).toFixed(2)} out of 5

        Final Grade: ${finalGrade(
          sub_bangla[index],
          sub_english[index],
          sub_math[index],
          sub_sscience[index],
          sub_science[index],
          sub_religion[index]
        )}



    `);
});
