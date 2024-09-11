import localFont from "next/font/local";

/*
Font Weight	Numerical Weight
"Thin", "Hairline" 100
"Extra Light", "Ultra Light" 200
"Light", "Book"	300
"Normal", "Regular", "Roman", "Standard", "Plain"	400/Normal
"Medium", "Demi" 500
"Semi Bold", "Semi Bld", "Demi Bold", "Demi Bld"	600
"Bold", "Bld"	700/Bold
"Extra Bold", "Ultra Bold", "Extra Bld", "Ultra Bld" 800
"Black", "Heavy", "Ultra", "Fat", "Poster", "Ultra Black" 900
*/

const SFProDisplay = localFont({
	src: [
		{
			path: "../../public/assets/fonts/sf-pro-display/sf-pro-display-thin.ttf",
			weight: "100",
			style: "thin",
		},
		{
			path: "../../public/assets/fonts/sf-pro-display/sf-pro-display-light.otf",
			weight: "300",
			style: "light",
		},
		{
			path: "../../public/assets/fonts/sf-pro-display/sf-pro-display-regular.otf",
			weight: "400",
			style: "regular",
		},
		{
			path: "../../public/assets/fonts/sf-pro-display/sf-pro-display-semibold.ttf",
			weight: "600",
			style: "semi bold",
		},
		{
			path: "../../public/assets/fonts/sf-pro-display/sf-pro-display-bold.otf",
			weight: "700",
			style: "bold",
		},
	],
	variable: "--font-sf-pro-display",
});

const CabinetGrotesk = localFont({
	src: [
		{
			path: "../../public/assets/fonts/cabinet-grotesk/cabinet-grotesk-thin.ttf",
			weight: "100",
			style: "thin",
		},
		{
			path: "../../public/assets/fonts/cabinet-grotesk/cabinet-grotesk-extralight.ttf",
			weight: "200",
			style: "extra light",
		},
		{
			path: "../../public/assets/fonts/cabinet-grotesk/cabinet-grotesk-light.ttf",
			weight: "300",
			style: "light",
		},
		{
			path: "../../public/assets/fonts/cabinet-grotesk/cabinet-grotesk-regular.ttf",
			weight: "400",
			style: "regular",
		},
		{
			path: "../../public/assets/fonts/cabinet-grotesk/cabinet-grotesk-medium.ttf",
			weight: "500",
			style: "medium",
		},
		{
			path: "../../public/assets/fonts/cabinet-grotesk/cabinet-grotesk-bold.ttf",
			weight: "700",
			style: "bold",
		},
		{
			path: "../../public/assets/fonts/cabinet-grotesk/cabinet-grotesk-extrabold.ttf",
			weight: "800",
			style: "extra bold",
		},
		{
			path: "../../public/assets/fonts/cabinet-grotesk/cabinet-grotesk-black.ttf",
			weight: "900",
			style: "black",
		},
	],
	variable: "--font-cabinet-grotesk",
});

export { SFProDisplay, CabinetGrotesk };
