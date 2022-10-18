const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class modifyStudentTable20221018091700 {

    async up(queryRunner) {
        await queryRunner.query(
            `alter table \`student\`
            rename column \`nationality\` to \`nationality_id\`,
            rename column \`document_type\` to \`document_type_id\`;`,);
    }

    async down(queryRunner) {
        await queryRunner.query(
            `alter table \`student\`
            rename column \`nationality_id\` to \`nationality\`,
            rename column \`document_type_id\` to \`document_type\`;`,);
    }

}
