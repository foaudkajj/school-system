const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class userTable20221017140025 {

    async up(queryRunner) {
        await queryRunner.query(
            `
              create table \`user\` (
                \`id\` char(36) not null,
                \`type\` enum ('Teacher', 'Student', 'Employee') not null,
                \`row_id\` char(36) not null,
                \`username\` varchar(50) not null,
                \`password\` varchar(50) not null,
                \`salt\` varchar(255) null,
                \`status\` enum ('Active', 'Passive') not null,
                constraint \`pk_user\` primary key (\`id\`),
                unique key \`unique_row_id\` (\`row_id\`)  
            ) Engine=InnoDB;
              `,
        );
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`user\`;`,
        );
    }

}
