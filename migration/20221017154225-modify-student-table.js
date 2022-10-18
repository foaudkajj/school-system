const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class modifyStudentTable20221017154225 {

    async up(queryRunner) {
        await queryRunner.query(
            `alter table \`student\` add education_type enum('PreSchool', 'School', 'Course') not null,
            add nationality char(36) not null,
            add document_type char(36) not null,
            add constraint \`fk_student_country\` foreign key (\`nationality\`) references \`country\` (\`id\`) on update cascade on delete restrict,
            add constraint \`fk_student_generic_list\` foreign key (\`document_type\`) references \`generic_list\` (\`id\`) on update cascade on delete restrict ;`,);
    }

    async down(queryRunner) {
        await queryRunner.query(
            `alter table \`student\` 
            drop constraint \`fk_student_country\`,
            drop constraint \`fk_student_generic_list\`,
            drop \`education_type\`,
            drop \`nationality\`,
            drop \`document_type\`;
            `);

    }

}
