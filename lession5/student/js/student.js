  function grade(score) {
      switch (true) {
          case score > 100:
              return '分数不能高于100';
          case score <= 100 && score > 90:
              return '1等生';
          case score <= 90 && score > 80:
              return '2等生';
          case score <= 80 && score > 70:
              return '3等生';
          case score <= 70 && score > 60:
              return '4等生';
          case score <= 60 && score > 50:
              return '5等生';
          case score <= 50 && score > 40:
              return '6等生';
          default:
              return '劝退';
      }
  }

  function studentGrade() {
      var name = document.getElementById('name').value;
      var score = parseFloat(document.getElementById('score').value);
      alert(name + ': ' + grade(score));
  }