const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class teacherTable20221014163125 {

    async up(queryRunner) {
        await queryRunner.query(
            `
              create table \`teacher\` (
                \`id\` char(36) not null,
                \`name\` varchar(100) not null,
                \`surname\` varchar(100) not null,
                \`tr_name\` varchar(100) not null,
                \`tr_surname\` varchar(100) not null,
                \`gender\` enum('Male','Female') not null,
                \`gsm\` varchar(25) null,
                \`identity_no\` varchar(20) not null,
                constraint \`pk_teacher\` primary key (\`id\`)
            ) Engine=InnoDB;
              `,
        );
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`teacher\`;`,
        );
    }

}
