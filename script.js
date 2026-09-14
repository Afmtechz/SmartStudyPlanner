document.addEventListener('DOMContentLoaded', () => {
  const languageSelect = document.getElementById('language');
  const translatedText = document.querySelectorAll('blockquote')[1];
  const transcriptText = document.querySelectorAll('blockquote')[0];
  const languageForm = document.querySelector('form');
  const assessmentButton = document.querySelector('#assessments button');
  const profileLanguage = document.querySelector('#profile p:nth-of-type(3)');

  const translationMap = {
    English: 'Data link layer is responsible for reliable communication between two directly connected nodes.',
    Telugu: 'డేటా లింక్ లేయర్ నేరుగా కనెక్ట్ అయిన రెండు నోడ్స్ మధ్య నమ్మకమైన కమ్యూనికేషన్‌ను అందిస్తుంది.',
    Hindi: 'डेटा लिंक लेयर दो सीधे जुड़े नोड्स के बीच विश्वसनीय संचार के लिए जिम्मेदार है।',
    Tamil: 'தரவு இணைப்பு அடுக்கு நேரடியாக இணைக்கப்பட்ட இரண்டு முனைகளுக்கு இடையே நம்பகமான தகவல்தொடர்புக்கு பொறுப்பாகும்.',
    Kannada: 'ಡೇಟಾ ಲಿಂಕ್ ಲೇಯರ್ ನೇರವಾಗಿ ಸಂಪರ್ಕಗೊಂಡಿರುವ ಎರಡು ನೋಡ್ಗಳ ನಡುವೆ ವಿಶ್ವಾಸಾರ್ಹ ಸಂವಹನಕ್ಕೆ ಜವಾಬ್ದಾರಿಯಾಗಿದೆ.',
    Malayalam: 'ഡാറ്റാ ലിങ്ക് ലെയർ നേരിട്ട് കണക്റ്റുചെയ്ത രണ്ട് നോഡുകൾക്കിടയിൽ വിശ്വസനീയമായ ആശയവിനിമയം നൽകുന്നതിന് ഉത്തരവാദിയാണ്.'
  };

  if (languageSelect) {
    languageSelect.addEventListener('change', (event) => {
      const selectedLanguage = event.target.value;
      const currentText = translationMap[selectedLanguage] || translationMap.English;

      if (translatedText) {
        translatedText.textContent = currentText;
      }

      if (profileLanguage) {
        profileLanguage.innerHTML = '<strong>Preferred Language:</strong> ' + selectedLanguage;
      }
    });
  }

  if (languageForm) {
    languageForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const selectedLanguages = [...document.querySelectorAll('input[type="checkbox"]:checked')]
        .map((checkbox) => checkbox.nextElementSibling?.textContent.trim())
        .filter(Boolean);

      if (selectedLanguages.length === 0) {
        alert('Please select at least one language to learn.');
        return;
      }

      alert('Saved languages: ' + selectedLanguages.join(', '));
    });
  }

  document.querySelectorAll('button').forEach((button) => {
    const label = button.textContent.trim();

    if (label === 'Join Classroom') {
      button.addEventListener('click', () => alert('You have joined the classroom.'));
    }

    if (label === 'Start Lecture') {
      button.addEventListener('click', () => alert('Lecture started successfully.'));
    }

    if (label === 'End Lecture') {
      button.addEventListener('click', () => alert('Lecture ended successfully.'));
    }

    if (label === 'Listen to Translation') {
      button.addEventListener('click', () => {
        const currentLanguage = languageSelect ? languageSelect.value : 'English';
        alert('Playing translation in ' + currentLanguage + '.');
      });
    }

    if (label === 'Pause Translation') {
      button.addEventListener('click', () => alert('Translation paused.'));
    }

    if (label === 'View Notes' || label === 'Download Notes') {
      button.addEventListener('click', () => alert('Notes action triggered.'));
    }

    if (label === 'Submit Assessment') {
      button.addEventListener('click', () => {
        const answers = {
          q1: 'Data Link Layer',
          q2: 'Character Count'
        };

        let score = 0;
        const totalQuestions = Object.keys(answers).length;

        Object.entries(answers).forEach(([questionKey, correctValue]) => {
          const selectedOption = document.querySelector(`input[name="${questionKey}"]:checked + label`);
          if (selectedOption && selectedOption.textContent.trim() === correctValue) {
            score += 1;
          }
        });

        const percentage = Math.round((score / totalQuestions) * 100);
        alert(`Assessment submitted! Your score: ${score}/${totalQuestions} (${percentage}%).`);
      });
    }

    if (label === 'View Offline Content') {
      button.addEventListener('click', () => alert('Offline study content is available locally.'));
    }

    if (label === 'Edit Profile') {
      button.addEventListener('click', () => alert('Profile editor opened.'));
    }

    if (label === 'Logout') {
      button.addEventListener('click', () => alert('Logged out successfully.'));
    }
  });

  if (transcriptText) {
    transcriptText.textContent = 'Data link layer is responsible for reliable communication between two directly connected nodes.';
  }

  if (translatedText) {
    translatedText.textContent = 'డేటా లింక్ లేయర్ నేరుగా కనెక్ట్ అయిన రెండు నోడ్స్ మధ్య నమ్మకమైన కమ్యూనికేషన్‌ను అందిస్తుంది.';
  }
});
