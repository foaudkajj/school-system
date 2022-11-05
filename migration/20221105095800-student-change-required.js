const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class studentChangeRequired20221105095800 {

    async up(queryRunner) {
        await queryRunner.query(
            `
            alter table \`student\`
            change column \`nationality_id\`  \`nationality_id\` char(36) null,
            change column \`tr_name\` \`tr_name\` varchar(100) null,
            change column \`tr_surname\` \`tr_surname\` varchar(100) null,
            change column \`document_type_id\` \`document_type_id\` char(36) null,
            change column \`education_type\` \`education_type\` enum('PreSchool', 'School', 'Course') null;
              `,
        );
    }

    async down(queryRunner) {
        await queryRunner.query(
            `
            alter table \`student\`
            change column \`nationality_id\`  \`nationality_id\` char(36) not null,
            change column \`tr_name\` \`tr_name\` varchar(100) not null,
            change column \`tr_surname\` \`tr_surname\` varchar(100) not null,
            change column \`document_type_id\` \`document_type_id\` char(36) not null,
            change column \`education_type\` \`education_type\` enum('PreSchool', 'School', 'Course') not null;
              `,
        );
    }

}
