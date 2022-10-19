const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class increasePasswordLength20221018201825 {

    async up(queryRunner) {
        await queryRunner.query(
            `alter table \`user\` modify \`password\` varchar(100);`,);
    }

    async up(queryRunner) {
        await queryRunner.query(
            `alter table \`user\` modify \`password\` varchar(50);`,);
    }

}
