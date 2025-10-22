let topZIndex = 3;

function viewTop(imgID) {
    const img = document.getElementById(imgID);
    topZIndex++;
    img.style.zIndex = topZIndex;
}