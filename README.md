# WorkAmerica Website 2017
## Installation
```
npm install
```
```
npm run development
```
```
npm run production
```

## Editing content
To edit content on the main pages (employer/educators/job seekers) you can edit the corresponding JSON files in ./src/static/content/

### Using the JSON files
Each section on the page has a dedicated object in the JSON file. You can't add extra sections to the page. However, you can add extra benefits- and feature-items by adding more objects to each array.

### Broke something?
Make sure you closed all double quotes and didn't forget any comma's.

## Structure
Each page is a collection of section components (ie. PageLanding, PageBenefits, PageSocial, etc.), we fetch the data from the JSON files on the pages and feed them to each component. Reorganizing content on each page is as easy as switching the order of the components on the page.
