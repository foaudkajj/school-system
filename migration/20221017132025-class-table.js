const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class classTable20221017132025 {

    async up(queryRunner) {
        await queryRunner.query(
            `
              create table \`class\` (
                \`id\` char(36) not null,
                \`name\` varchar(100) not null,
                \`education_type\` enum('PreSchool', 'School', 'Course') not null,
                constraint \`pk_class\` primary key (\`id\`)
            ) Engine=InnoDB;
              `,
        );
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`class\`;`,
        );
    }

}
