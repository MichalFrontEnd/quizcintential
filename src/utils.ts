// Fisher-Yates shuffle algorithm
export function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function getQuestionLimit (difficulty: string): number  {
    switch (difficulty) {
      case "easy":
        return 10;
      case "medium":
        return 20;
      case "hard":
        return 30;
      case "sparta":
        return 40;
      default:
        return 10;
    }
}