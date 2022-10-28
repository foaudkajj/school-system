const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class removeClassIdColumnFromLessonTable20221021152025 {

    async up(queryRunner) {
        await queryRunner.query(
            `alter table \`lesson\` drop FOREIGN KEY \`fk_lesson_class\`,
            drop \`class_id\`;`,);
    }

    async down(queryRunner) {
        await queryRunner.query(
            `alter table \`lesson\` add \`class_id\`,
             add constraint \`fk_lesson_class\` foreign key (\`class_id\`) references \`class\` (\`id\`) on update cascade on delete restrict ;`,);
    }

}
