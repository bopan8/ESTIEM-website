import React from 'react';

import './Board.css';
import presidentCard from './presidentcardCompress.png';
import localResponsible from './StiliqnCompress.png';
import crCard from './doraCompress.png';
import hrCard from './hrisiCompress.png';
import financeCard from './krisCompress.png';
import prCard from './rosyCompress.png';
export const Board =  () =>  (
    //<script >src="https://kit.fontawesome.com/d1e2379de6.js" crossorigin="anonymous"</script>

    
        <div>
            <h3>Our board for 2020 - 2021</h3>

            
            <div className="president-card">
                <img src={presidentCard} alt="President"/>
                <div className="president-container">
                <h4><b>Plamen Kerelsky</b></h4>
                <p>President</p>
                    <div className="social">
                        <a href="https://www.facebook.com/plamen.kerelsky" rel="noopener noreferrer" target="_blank"><i class="fab fa-facebook"></i></a>
                        <a href="https://www.instagram.com/justpazo/" rel="noopener noreferrer" target="_blank" ><i class="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/plamen-kerelsky-b172761aa/" rel="noopener noreferrer" target="_blank"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>

            <div className="lr-card">
                <img src={localResponsible} alt="Local Responsible"/>
                <div className="lr-container">
                <h4><b>Stiliyan Lyutov</b></h4>
                <p>Local Responsible</p>
                <div className="social">
                <a href="https://www.facebook.com/StiliyanLyutov" rel="noopener noreferrer" target="_blank"><i class="fab fa-facebook"></i></a>
                <a href="https://www.instagram.com/stiliyanbringsjuice/?fbclid=IwAR2G6y_VDOvwb2BkxNxsyQimeD4JIvpZgTFZoxzc0OJ-8wzSuTIff_py-kI" rel="noopener noreferrer" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/stiliyan-lyutov-8274381a9/" rel="noopener noreferrer" target="_blank"><i class="fab fa-linkedin"></i></a>
                <a href="https://github.com/stiliyanlyutov?fbclid=IwAR35Fw5MneD99y3FHZCKU1-2YesSNPck6QaHE6TRyjPRazM5rerAjlcN-hg" rel="noopener noreferrer" target="_blank"><i class="fab fa-github"></i></a>
                </div>
                </div>
            </div>

            <div className="cr-card">
            <img src={crCard} alt="VP of Corporate Relations"/>
            <div className="cr-container">
            <h4><b>Dora Naydenova</b></h4>
                <p>VP of Corporate Relations</p>
                <div className="social">
                <a href="https://www.facebook.com/dora.naydenova.165" rel="noopener noreferrer" target="_blank" ><i class="fab fa-facebook"></i></a>
                <a href="https://www.instagram.com/doranaydenova/?hl=bg" rel="noopener noreferrer" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/dora-naydenova/" rel="noopener noreferrer" target="_blank"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>
            </div>

            <div className="hr-card">
            <img src={hrCard} alt="VP of Human Relations"/>
            <div className="hr-container">
            <h4><b>Hristina Cherkezova</b></h4>
                <p>VP of Human Relations</p>
                <div className="social">
                <a href="https://www.facebook.com/hrisy.cherkezova/" rel="noopener noreferrer" target="_blank"><i class="fab fa-facebook"></i></a>
                <a href="https://www.instagram.com/_h_ris/?hl=bg" rel="noopener noreferrer" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/hristina-cherkezova-a530791b6/" rel="noopener noreferrer" target="_blank"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>
            </div>

            <div className="finance-card">
            <img src={financeCard} alt="VP of Finance"/>
            <div className="finance-container">
            <h4><b>Kristiyan Kraychev</b></h4>
                <p>VP of Finance</p>
                <div className="social">
                <a href="https://www.facebook.com/cb142205" rel="noopener noreferrer" target="_blank" ><i class="fab fa-facebook"></i></a>
                <a href="https://www.instagram.com/cb14225/?hl=bg" rel="noopener noreferrer" target="_blank" ><i class="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/kristiyan-kraychev-5592861b5/" rel="noopener noreferrer" target="_blank"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>
            </div>

            <div className="pr-card">
            <img src={prCard} alt="VP of Public Relations"/>
            <div className="pr-container">
            <h4><b>Rosislava Dimitrova</b></h4>
                <p>VP of Public Relations</p>
                <div className="social">
                <a href="https://www.facebook.com/profile.php?id=100001470584740" rel="noopener noreferrer" target="_blank"><i class="fab fa-facebook"></i></a>
                <a href="https://www.instagram.com/rossigd99/?hl=bg" rel="noopener noreferrer" target="_blank" ><i class="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/rosislava-dimitrova-654a421b2/" rel="noopener noreferrer" target="_blank"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>
            </div>
            
        </div>
    )