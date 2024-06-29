export const getCroppedImg = async (imageSrc, crop) => {
    const image = new Image();
    
    image.src = imageSrc;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = crop.width;
    canvas.height = crop.height;

    ctx.drawImage(
        image,
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        crop.width,
        crop.height
    );

    return new Promise((resolve, reject) => {
        canvas.toBlob(
            (blob) => {
                if (!blob) {
                    console.error('Canvas is empty');
                    return;
                }
                resolve(URL.createObjectURL(blob));
            },
            'image/jpeg', // Adjust the image format as needed (e.g., 'image/png')
            1 // Adjust the image quality (0 to 1)
        );
    });
};
