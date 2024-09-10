import OpenAI from "openai";

interface Option {
  prompt: string;
}

export const generateImageUseCase = async (openai: OpenAI, { prompt }: Option) => {
  try {
    const response = await openai.images.generate({
      prompt, // El prompt proporcionado por el usuario para generar la imagen.
      n: 1, // Número de imágenes a generar.
      size: "1024x1024" // Tamaño de la imagen (puede ser 256x256, 512x512, o 1024x1024).
    });

    // Devolvemos la URL de la imagen generada.
    return { imageUrl: response.data[0].url };
  } catch (error) {
    console.error("Error al generar la imagen:", error);
    throw new Error("No se pudo generar la imagen.");
  }
};