const mainPrompt = [
 {
    name: "select", 
    description: "Escolha a ferrramenta (1 - QRCODE ou  (2- PASSAWORD", 
    pattern:/^[1-2]^+$/, 
    massage:"Escolha apenas entre 1 e 2", 
    required:true
 },           
]; 

export default mainPrompt; 