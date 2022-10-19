const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class courseTable20221018112525 {

    async up(queryRunner) {
        await queryRunner.query(
            `
              create table \`course\` (
                \`id\` char(36) not null,
                \`title\` varchar(1000) not null,
                \`trainer_name\` varchar(100) not null,
                \`start_date\` datetime null,
                \`end_date\` datetime null,
                \`fee\` decimal(8,2) null,
                \`with_test\` bool default false not null,
                \`level_id\` char(36) null,
                constraint \`pk_course\` primary key (\`id\`),
                constraint \`fk_course_generic_list\` foreign key (\`level_id\`) references \`generic_list\` (\`id\`) on update cascade on delete restrict
            ) Engine=InnoDB;
              `,
        );
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`course\`;`,
        );
    }

}
