module.exports = function (option) {

    // Prepare List
    const optionsList = [];

    // Read Data
    for (const item in this.list) {
        if (typeof this.list[item].value === "string") {

            // Insert Data
            const insertData = {
                value: this.list[item].value
            };

            // Insert Name
            if (typeof this.list[item].name === "string") {
                insertData.name = this.list[item].name;
            } else {
                insertData.name = this.list[item].value;
            }

            // Is Selected
            if (this.list[item].value === option) {
                insertData.selected = true;
            } else {
                insertData.selected = false;
            }

            // Insert data
            optionsList.push(insertData);

        }
    }

    // Return Data
    return optionsList;

};