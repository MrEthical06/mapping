import axios from "axios";
import * as stringsim from "string-similarity";
import chalk from "chalk";
const kitsu = async (title: string) => {
  try {
    console.log(chalk.green`[+] Getting Kitsu mappings for ${title}`);
    const { data: kData } = await axios.get(
      `https://kitsu.io/api/edge/anime?filter[text]=${title}`
    );
    const { relationships, ratingFrequencies, ...cleanedData } = kData.data[0];

    return cleanedData;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(
        chalk.red`[-] Failed to get mappings for ${title} on Kitsu: ${error.name} - ${error.message}`
      );
    }
    console.log(chalk.red`[-] Failed to get mappings for ${title} on Kitsu`);
    return undefined;
  }
};

export default kitsu;

