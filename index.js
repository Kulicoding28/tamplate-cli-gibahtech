#!/usr/bin/env node

import chalk from "chalk";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";
import inquirer from "inquirer";
import * as fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";
import createDirectoryContents from "./createDirectoryContents.js";
const CURR_DIR = process.cwd();
const __dirname = dirname(fileURLToPath(import.meta.url));

const CHOICES = fs.readdirSync(`${__dirname}/templates`);

function winner() {
  console.clear();
  figlet(`Congrats \n $ 1 , 0 0 0 , 0 0 0`, (err, data) => {
    console.log(gradient.pastel.multiline(data) + "\n");
  });
}

const spinner = createSpinner("").start();

setTimeout(() => {
  spinner.success();
}, 1000);

const QUESTIONS = [
  {
    name: "project-choice",
    type: "list",
    message: "What project template would you like to generate?",
    choices: CHOICES,
  },
  {
    name: "project-name",
    type: "input",
    message: "Project name:",
    validate: function (input) {
      if (/^([A-Za-z\-\\_\d])+$/.test(input))
        return spinner.stop({ text: "Done!", color: "magenta" }), true;
      else return spinner.error({ text: "Error!", mark: ":(" });
    },
  },
];

inquirer.prompt(QUESTIONS).then((answers) => {
  const projectChoice = answers["project-choice"];
  const projectName = answers["project-name"];
  const templatePath = `${__dirname}/templates/${projectChoice}`;

  fs.mkdirSync(`${CURR_DIR}/${projectName}`);
  createDirectoryContents(templatePath, projectName);
});
