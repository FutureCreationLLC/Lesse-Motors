// Function to load hero slideshow images from Firebase
function loadHeroSlideshow() {
    const hero = document.getElementById('heroSlideshow');
    const carTypes = ['sedan','pragya','bus','suv','pickup','van','cargo','mini-truck','luxury','coupe'];

    carTypes.forEach(type=>{
        const typeRef = storageRef.child(type);
        typeRef.listAll().then(res=>{
            res.items.forEach(itemRef=>{
                itemRef.getDownloadURL().then(url=>{
                    const img = document.createElement('img');
                    img.src = url;
                    img.style.width='100%';
                    img.style.height='100%';
                    img.style.objectFit='cover';
                    img.style.position='absolute';
                    img.style.top=0;
                    img.style.left=0;
                    hero.appendChild(img);
                });
            });
        });
    });
}