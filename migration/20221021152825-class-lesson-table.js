const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class classLessonTable20221021152825 {

    async up(queryRunner) {
        await queryRunner.query(
            `
              create table \`class_lesson\` (
                \`id\` char(36) not null,
                \`class_id\` char(36) not null,
                \`lesson_id\` char(36) not null,
                constraint \`pk_class_lesson\` primary key (\`id\`),
                constraint \`fk_class_lesson_class\` foreign key (\`class_id\`) references \`class\` (\`id\`) on update cascade on delete restrict,
                constraint \`fk_class_lesson_lesson\` foreign key (\`lesson_id\`) references \`lesson\` (\`id\`) on update cascade on delete restrict
            ) Engine=InnoDB;
              `,
        );
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`class_lesson\`;`,
        );
    }

}
