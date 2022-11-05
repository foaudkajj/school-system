const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class modifyTeacherTable20221104183225 {

    async up(queryRunner) {
        await queryRunner.query(
            `alter table \`teacher\` add \`serial_no\` varchar(10) null,
            add unique key \`unique_serial_no\` (\`serial_no\`);`,);
    }

    async down(queryRunner) {
        await queryRunner.query(
            `alter table \`teacher\` drop index \`unique_serial_no\`,
            drop \`serial_no\`;`);
    }

}
