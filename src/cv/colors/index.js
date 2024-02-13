export default function setColor(color){
    switch (color) {
        case "red":
            return { bg: "bg-red-500", border: "border-red-500", text: "text-red-500" }
        case "primary":
            return { bg: "bg-primary-deep", border: "border-primary-deep", text: "text-primary-deep" }
        case "gamma":
            return { color: "green", value: "#00FF00" }
        case "delta":
            return { color: "orange", value: "#FFA500" }
        case "epsilon":
            return { color: "purple", value: "#800080" }
        default:
            return { color: "black", value: "#000000" }
    }
}