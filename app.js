 function openTest() {
            document.getElementById('testPopup').style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function closeTest() {
            document.getElementById('testPopup').style.display = 'none';
            document.body.style.overflow = 'auto';
            resetTest();
        }

        function resetTest() {
            const radios = document.querySelectorAll('input[type="radio"]');
            radios.forEach(radio => radio.checked = false);
            document.getElementById('results').style.display = 'none';
            document.getElementById('questions').style.display = 'block';
            document.getElementById('submitBtn').style.display = 'block';
        }

        function submitTest() {
            const answers = {
                q1: 'b',
                q2: 'b', 
                q3: 'a',
                q4: 'b',
                q5: 'b',
                q6: 'a',
                q7: 'b',
                q8: 'c'
            };

            let score = 0;
            let total = Object.keys(answers).length;

            for (let question in answers) {
                const selected = document.querySelector(`input[name="${question}"]:checked`);
                if (selected && selected.value === answers[question]) {
                    score++;
                }
            }

            const percentage = Math.round((score / total) * 100);
            
            let feedback = '';
            if (percentage >= 80) {
                feedback = 'Výborně! Máte skvělé znalosti základů ekonomiky!';
            } else if (percentage >= 60) {
                feedback = 'Dobře! Máte solidní základy, ale je prostor pro zlepšení.';
            } else {
                feedback = 'Doporučujeme si prostudovat materiál znovu a zkusit to znovu.';
            }

            document.getElementById('score').textContent = `Váš výsledek: ${score}/${total} bodů (${percentage}%)`;
            document.getElementById('feedback').textContent = feedback;
            
            document.getElementById('questions').style.display = 'none';
            document.getElementById('results').style.display = 'block';
            document.getElementById('submitBtn').style.display = 'none';
        }

        // Close popup when clicking outside
        document.getElementById('testPopup').addEventListener('click', function(e) {
            if (e.target === this) {
                closeTest();
            }
        });

        // Add smooth scrolling to sections
        document.addEventListener('DOMContentLoaded', function() {
            const sections = document.querySelectorAll('.concept-card, .market-card, .indicator');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            });

            sections.forEach(section => {
                section.style.opacity = '0';
                section.style.transform = 'translateY(20px)';
                section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(section);
            });
        });