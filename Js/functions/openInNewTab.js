export const openInNewTab = (url) => {
	//funcion que abre los links en pestañas nuevas
	const newWindow = window.open(url, "_blank", "noopener,noreferrer");
	if (newWindow) newWindow.opener = null;
};
