const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class modifyStudentTable20221104183225 {

    async up(queryRunner) {
        await queryRunner.query(
            `alter table \`student\` add \`serial_no\` varchar(10) not null,
            add unique key \`unique_serial_no\` (\`serial_no\`);`,);
    }

    async down(queryRunner) {
        await queryRunner.query(
            `alter table \`student\` drop index \`unique_serial_no\`,
            drop \`serial_no\`;`);
    }

}
