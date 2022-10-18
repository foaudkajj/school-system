const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class lessonTable20221017134225 {

    async up(queryRunner) {
        await queryRunner.query(
            `
              create table \`lesson\` (
                \`id\` char(36) not null,
                \`name\` varchar(100) not null,
                \`class_id\` char(36) not null,
                constraint \`pk_lesson\` primary key (\`id\`),
                constraint \`fk_lesson_class\` foreign key (\`class_id\`) references \`class\` (\`id\`) on update cascade on delete restrict
            ) Engine=InnoDB;
              `,
        );
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`lesson\`;`,
        );
    }

}
