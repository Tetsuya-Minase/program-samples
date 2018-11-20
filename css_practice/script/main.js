'use strict'

window.onload = () => {
    document.getElementsByClassName('command-area__command-list')[0]
        .addEventListener('click', () => {
            const radioButtons = document.getElementsByName('command');
            if (radioButtons[0].checked) {
                document.getElementsByClassName('target-area')[0].style.display = 'inline-block';
            } else {
                document.getElementsByClassName('target-area')[0].style.display = 'none';
            }
            if (radioButtons[1].checked) {
                document.getElementsByClassName('skill-area')[0].style.display = 'inline-block';
                document.getElementsByClassName('skill-area__skill-list')[0].addEventListener('click', () => {
                    const skillButtons = document.getElementsByName('skill');
                    for (const skill of skillButtons) {
                        if(skill.checked) {
                            document.getElementsByClassName('target-area')[0].style.display = 'inline-block';
                            break;
                        }
                    }
                });
            } else {
                document.getElementsByClassName('skill-area')[0].style.display = 'none';
            }
        });
}

