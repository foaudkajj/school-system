const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class modifyStudentTable20221018091700 {

    async up(queryRunner) {
        await queryRunner.query(
            `alter table \`student\`
            change column \`nationality\`  \`nationality_id\` char(36) not null,
            change column \`document_type\` \`document_type_id\` char(36) not null ;`,);
    }

    async down(queryRunner) {
        await queryRunner.query(
            `alter table \`student\`
            change column \`nationality_id\`  \`nationality\` char(36) not null,
            change column \`document_type_id\` \`document_type\` char(36) not null ;`,);
    }

}
