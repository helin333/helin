const sentences = [
    " inovatif düşünmeyi teşvik eder.",
    " dijital dönüşüm süreçlerinde kilit rol oynar.",
    " kendini sürekli geliştirmeye açık bir alan sunar.",
    " girişimcilik için sağlam bir temel sağlar.",
    " veri analizi ve karar desteği becerisi kazandırır.",
    " problem çözme ve analitik düşünme geliştirir.",
    " teknoloji ve işletmeyi birleştirir.",
    " bilgi teknolojileri ile iş stratejilerini entegre etmeyi öğretir.",
    " yeni teknolojileri hıuzlı öğrenme alışkanlığı kazandırır.",
    " iş süreçlerini optimize etme becerisi kazandırır.",
    ];
    
    document.addEventListener("DOMContentLoaded",function() {
        const btn=document.getElementById("randomSentenceBtn");
        const display=document.getElementById("randomSentence");
        btn.addEventListener("click",function() {
        const randomIndex=Math.floor(Math.random()*sentences.length);
        display.textContent="Çünkü"+sentences[randomIndex];
        });
    });
    